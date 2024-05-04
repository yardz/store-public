export const FormatSizeFile = ({ sizeBytes }: { sizeBytes: number }) => {
	let size = sizeBytes;
	const thresh = 1024;

	if (Math.abs(size) < thresh) {
		return size + ' B';
	}

	const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let u = -1;
	const r = 10 ** 1;

	do {
		size /= thresh;
		++u;
	} while (Math.round(Math.abs(size) * r) / r >= thresh && u < units.length - 1);

	return size.toFixed(1) + ' ' + units[u];
};
