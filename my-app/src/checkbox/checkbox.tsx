// eslint-disable-next-line import/no-extraneous-dependencies
import * as React from 'react';
import classNames from 'classnames';


export interface Props {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    type?: string;
    title?: string;
    defaultChecked?: number | boolean;
    checked?: number | boolean;
    disabled?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: Event) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    tabIndex?: string | number;
    readOnly?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    value?: any;
}

export default class Checkbox extends React.Component<Props> {
    static defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        title: '',
        defaultChecked: false,
        onFocus() { },
        onBlur() { },
        onChange() { },
        onKeyDown() { },
        onKeyPress() { },
        onKeyUp() { },
    };

    constructor(props: any) {
        super(props);

        const checked = 'checked' in props ? props.checked : props.defaultChecked;

        this.state = {
            checked,
        };
    }

    static getDerivedStateFromProps(props: any, state: any) {
        if ('checked' in props) {
            return {
                ...state,
                checked: props.checked,
            };
        }
        return null;
    }

    focus() {
        (this as any).input.focus();
    }

    blur() {
        (this as any).input.blur();
    }

    handleChange = (e: any) => {
        const { disabled, onChange } = (this as any).props;
        if (disabled) {
            return;
        }
        if (!('checked' in this.props)) {
            this.setState({
                checked: e.target.checked,
            });
        }
        if (onChange) {
            onChange({
                target: {
                    ...this.props,
                    checked: e.target.checked,
                },
                stopPropagation() {
                    e.stopPropagation();
                },
                preventDefault() {
                    e.preventDefault();
                },
                nativeEvent: e.nativeEvent,
            });
        }
    };

    saveInput = (node: any) => {
        (this as any).input = node;
    };

    render() {
        const {
            prefixCls,
            className,
            style,
            name,
            id,
            type,
            title,
            disabled,
            readOnly,
            tabIndex,
            onClick,
            onFocus,
            onBlur,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            autoFocus,
            value,
            required,
            ...others
        } = (this as any).props;
        console.log('value', value);
        const globalProps = Object.keys(others).reduce((prev, key) => {
            if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                // eslint-disable-next-line no-param-reassign
                (prev as any)[key] = others[key];
            }
            return prev;
        }, {});

        const { checked } = (this as any).state;
        const classString = classNames(prefixCls, className, {
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled,
        });

        return (
            <span className={classString} style={style}>
                <input
                    name={name}
                    id={id}
                    type={type}
                    title={title}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    className={`${prefixCls}-input`}
                    checked={!!checked}
                    onClick={onClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    onKeyPress={onKeyPress}
                    onChange={this.handleChange}
                    autoFocus={autoFocus}
                    ref={this.saveInput}
                    value={value}
                    {...globalProps}
                />
                <span className={`${prefixCls}-inner`} />
            </span>
        );
    }
}
