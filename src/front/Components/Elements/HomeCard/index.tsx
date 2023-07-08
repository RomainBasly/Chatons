import React, { useEffect, useState } from 'react'
import classes from './classes.module.scss'
import paw from '../../../Assets/cat-paw.svg'
import location from '../../../Assets/location.svg'
import info from '../../../Assets/info.svg'

interface IProps {
  textDescription: string
  title: string
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
  const { title, textDescription } = props
  const [picto, setPicto] = useState<ImageObject | null>()

  useEffect(() => {
    const newPicto = getPicto(title)
    setPicto(newPicto)
  }, [title])

  const getPicto = (title: string) => {
    switch (title) {
      case 'Signalement':
        return paw
      case 'Localiser':
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
        {textDescription}
        <div className={classes['infoContainer']}>
          <img src={String(info.src)} alt="info picto" />
        </div>
      </div>
    </div>
  )
}
