'use client'
import Link from 'next/link'
import React from 'react'
import { DefaultTemplate } from '../../Materials/Template/DefaultTemplate'
import { HomeCard } from '../HomeCard'
import TextContent from '../../TextContent/dictionnary.json'
import classes from './classes.module.scss'

interface IProps {}

interface Card {
  id: number
  title: string
  description: string
  linkUrl: string
}

const cards: Card[] = TextContent.pages.landingPage.cards

export const Home: React.FC = () => {
  return (
    <DefaultTemplate>
      <div className={classes['root']}>
        <div className={classes['bandeau']}>
          <h1 className={classes['title']}>
            {TextContent.pages.landingPage.title}
          </h1>
        </div>
        {cards && (
          <div className={classes['cards-container']}>
            {cards.map((card) => (
              <HomeCard
                key={card.id}
                id={card.id}
                title={card.title}
                textDescription={card.description}
                textButton={card.textButton}
              />
            ))}
          </div>
        )}
      </div>
    </DefaultTemplate>
  )
}
