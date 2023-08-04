import classNames from 'classnames'
import React from 'react'
import classes from './classes.module.scss'
import Image from 'next/image'
import { EButtonIconPosition, EButtonVariant } from '../../Elements/enums'

type IProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  fullwidth?: boolean
  disabled?: boolean
  icon?: string
  variant?: EButtonVariant
  color?: 'main' | 'neutral' | 'disabled'
  size?: 'medium' | 'large' | 'small' | 'xsmall'
  startIcon?: React.ReactNode
  className?: string
  iconPosition?: EButtonIconPosition
}

const Button: React.FC<IProps> = (props: IProps) => {
  let {
    children = 'defaultButton',
    onClick,
    type = 'button',
    fullwidth = 'false',
    disabled = false,
    variant = EButtonVariant.PRIMARY,
    className = '',
    icon,
    iconPosition,
  } = props

  const fullwidthattr = fullwidth.toString()
  const attributes = {
    ...props,
    variant,
    disabled,
    fullwidth,
    type,
    fullwidthattr,
  }

  return (
    <div className={classes['root']}>
      <button
        {...attributes}
        onClick={onClick}
        className={classNames([classes['root'], className])}
      >
        {icon && iconPosition === EButtonIconPosition.LEFT && (
          <Image src={icon} alt={'button icon'} />
        )}
        <div className={classes['children']}>{children}</div>
        {icon && iconPosition === EButtonIconPosition.RIGHT && (
          <Image src={icon} alt={'button icon'} />
        )}
      </button>
    </div>
  )
}

export default Button
