import css from 'dom-css';

export default (root, text, theme, width, left) => {
    let background = root.appendChild(document.createElement('div'));
    let value = background.appendChild(document.createElement('span'));

    value.innerHTML = text;

    let bgcss = {
        position: 'absolute',
        backgroundColor: theme.colors.componentBackground,
        paddingLeft: '1.5%',
        height: '20px',
        width: width,
        display: 'inline-block',
        overflow: 'hidden'
    }

    if (!left) {
        bgcss.right = 0;
    }

    css(background, bgcss);

    css(value, {
        'font-family': `'Hack', monospace`,
        'font-size': '11px',
        color: theme.colors.textSecondary,
        display: 'inline-block',
        userSelect: 'text',
        cursor: 'text',
        overflow: 'hidden',
        lineHeight: '20px',
        wordBreak: 'break-all',
        height: 20
    });

    return value;
}
