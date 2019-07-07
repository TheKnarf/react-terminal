import React from 'react';
import css from './terminal.module.css';

export const ToolbarTitle = ({ children }) =>
	<div className={css.title}>{children}</div>;

export const Light = ({ children, className }) =>
	<div className={[css.light, className].join(' ')}>
		<div className={css.glyph}>{ children }</div>
	</div>;

export const Toolbar = ({ title }) =>
	<div className={css.toolbar}>
		<div className={css.top}>
			<div className={css.lights}>
				<Light className={css.red}>x</Light>
				<Light className={css.yellow}>-</Light>
				<Light className={css.green}>+</Light>
			</div>
			<ToolbarTitle>{title}</ToolbarTitle>
		</div>
	</div>;

export const Cursor = () =>
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
