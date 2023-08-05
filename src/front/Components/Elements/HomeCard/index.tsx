import React, { useEffect, useState } from 'react'
import classes from './classes.module.scss'
import sos from '../../../Assets/emergency-call.svg'
import location from '../../../Assets/location.svg'
import Button from '../../Materials/buttons'
import { EButtonVariant } from '../enums'

interface IProps {
  id: number
  title: string
  textDescription: string
  textButton: string
  className?: string
}

interface ImageObject {
  src: string
  height: number
  width: number
  blurWidth: number
  blurHeight: number
}

export const HomeCard: React.FC<IProps> = (props) => {
  const { title, textDescription, textButton, id } = props
  const [picto, setPicto] = useState<ImageObject | null>()

  useEffect(() => {
    const newPicto = getPicto(id)
    setPicto(newPicto)
  }, [title])

  const getPicto = (id: number) => {
    switch (id) {
      case 1:
        return sos
      case 2:
        return location
      default:
        return
    }
  }

  return (
    <div className={classes['root']}>
      <div className={classes['illustration']}>
        {picto && <img src={String(picto.src)} alt="cat paw" />}
      </div>
      <div className={classes['description']}>
        <h3>{title}</h3>
        <div className={classes['text']}>{textDescription}</div>
        <div className={classes['buttonContainer']}>
          <Button variant={EButtonVariant.PRIMARY} size="xsmall">
            {textButton}
          </Button>
        </div>
      </div>
    </div>
  )
}
