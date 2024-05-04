import React from 'react';
import classNames from 'classnames';

type Line = (string | number | null | undefined | JSX.Element)[];

interface Props {
	id?: string;
	striped?: boolean;
	bordered?: boolean;
	hover?: boolean;
	condensed?: boolean;
	header: Line;
	body: Line[];
	filter?: Line;
}

export const Table: React.FC<Props> = ({ id, striped, hover, condensed, bordered, header, body, filter }) => {
	return (
		<table
			id={id}
			className={classNames({
				table: true,
				'table-striped': !!striped,
				'table-bordered': !!bordered,
				'table-hover': !!hover,
				'table-sm': !!condensed,
			})}>
			<thead>
				<tr>
					{header.map((item, key) => (
						<th key={key}>{item}</th>
					))}
				</tr>
				{filter && (
					<tr style={{ background: '#E2E6EA', padding: '5px' }}>
						{filter.map((item, key) => (
							<th key={key}>{item}</th>
						))}
					</tr>
				)}
			</thead>
			<tbody>
				{!body.length && (
					<tr>
						<td colSpan={header.length} className="font-weight-bold text-center">
							Lista vazia
						</td>
					</tr>
				)}
				{body &&
					body.map((line, lineIndex) => (
						<tr key={lineIndex}>
							{line.map((item, itemIdenx) => (
								<td className="align-middle" key={itemIdenx}>
									{item}
								</td>
							))}
						</tr>
					))}
			</tbody>
		</table>
	);
};
