/* eslint-disable dot-notation */
import { Controller, Post, Response, Request, Logger } from '@nestjs/common';
import { FilesService } from './files.service';
import to from 'await-to-js';
import { Uid, Auth } from '@Utils/decorators';
import { generate } from 'randomstring';
import path from 'path';
import os from 'os';
import fs from 'fs';
import Busboy from 'busboy';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('File Upload')
@Controller('files')
export class FilesController {
	constructor(private readonly filesService: FilesService, private readonly logger: Logger) {
		this.logger.setContext('FilesController');
	}

	@Auth('Slides.created', 'Slides.update')
	@Post('/')
	async upload(@Request() req, @Response() res, @Uid() uid) {
		// this.logger.info('Iniciando: upload');
		const busboy = new Busboy({ headers: req.headers });

		const tmpdir = os.tmpdir();
		const fields = {};
		const uploads = {};
		const fileWrites: Promise<void>[] = [];

		busboy.on('field', (fieldname, value) => {
			this.logger.log({ message: 'Upload field', fieldname, value, uid });
			fields[fieldname] = value;
		});

		busboy.on('file', (fieldname, file, filename) => {
			this.logger.log({ message: 'Upload files', filename, uid });
			const filepath = path.join(tmpdir, `${generate(10)}-${filename}`);
			uploads[fieldname] = filepath;
			const writeStream = fs.createWriteStream(filepath);
			file.pipe(writeStream);
			const promise = new Promise<void>((resolve, reject) => {
				file.on('end', () => {
					writeStream.end();
				});
				writeStream.on('finish', resolve);
				writeStream.on('error', reject);
			});
			fileWrites.push(promise);
		});
		busboy.on('finish', async () => {
			this.logger.log({ message: 'Processamento dos campos de upload completo', uid });
			await Promise.all(fileWrites);
			const filePath = uploads['file'];
			// eslint-disable-next-line prefer-destructuring
			const folder = fields['folder'];

			if (!filePath || !folder) {
				// eslint-disable-next-line guard-for-in
				for (const deleteFile in uploads) {
					try {
						fs.unlinkSync(uploads[deleteFile]);
					} catch (err) {
						res.status(400).json({ error: '"file" or "folder" doesn\'t exists' }).send();
					}
				}
				this.logger.warn({ mesage: 'File ou Folder não existem: ', filePath, folder, uid });
				res.status(400).json({ error: '"file" or "folder" doesn\'t exists' }).send();
				return;
			}

			const [error, file] = await to(this.filesService.uploadFile(filePath, folder));
			// eslint-disable-next-line guard-for-in
			for (const deleteFile in uploads) {
				try {
					fs.unlinkSync(uploads[deleteFile]);
				} catch (err) {
					res.status(400).json({ error: '"file" or "folder" doesn\'t exists' }).send();
				}
			}
			if (error) {
				this.logger.error({ message: 'Upload erro desconhecido: ', error, uid });
				res.status(400).json({ error }).send();
			} else {
				this.logger.log({ message: 'Upload efetuado com sucesso: ', filePath, folder, file, uid });
				res.status(200).json(file).send();
			}
		});
		return req.pipe(busboy);
	}
}
