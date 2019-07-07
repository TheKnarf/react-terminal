import React from 'react';
import css from './terminal.module.css';

const Toolbar = ({ title }) =>
	<div className={css.toolbar}>
		<div className={css.top}>
			<div className={css.lights}>
				<div className={css.light + ' ' + css.red}>
					<div className={css.glyph}>×</div>
				</div>				
				<div className={css.light + ' ' + css.yellow}>
					<div className={css.glyph}>-</div>
				</div>
				<div className={css.light + ' ' + css.green}>
					<div className={css.glyph}>+</div>
				</div>
			</div>
			<div className={css.title}>{title}</div>
		</div>
	</div>;

const Cursor = () =>
	<div className={css.cursor} />;

const Terminal = ({ children, title="Untitled" }) =>
	<div className={css.main}>
		<Toolbar title={title} />
		<div className={css.body}>
			<p>{children}</p>
			<Cursor />
		</div>	
	</div>;

export default Terminal;
