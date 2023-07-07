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
  {
    console.log(cards)
  }
  return (
    <DefaultTemplate>
      <div className={classes['root']}>
        <h1 className={classes['title']}>
          {TextContent.pages.landingPage.title}
        </h1>
        {cards && (
          <div className={classes['cards-container']}>
            {cards.map((card) => (
              <Link href={card.linkUrl} key={card.id}>
                <HomeCard
                  textDescription={card.description}
                  title={card.title}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </DefaultTemplate>
  )
}
