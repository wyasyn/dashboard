import React from 'react'
import { Stats } from '../../components'
import { images } from "../../constants"

const Overview = () => {
  return (
    <section className='overview'>
        <Stats 
        title = 'Page Views'
        img = {images.facebook}
        stat = '87'
        arrow = {images.up}
        percent = '3'
        />
        <Stats 
        title = 'Likes'
        img = {images.facebook}
        stat = '52'
        arrow = {images.down}
        percent = '2'
        />
        <Stats 
        title = 'Likes'
        img = {images.instagram}
        stat = '5462'
        arrow = {images.up}
        percent = '2267'
        />
        <Stats 
        title = 'Portfolio Views'
        img = {images.instagram}
        stat = '52k'
        arrow = {images.up}
        percent = '1375'
        />
        <Stats 
        title = 'Retweets'
        img = {images.twitter}
        stat = '117'
        arrow = {images.up}
        percent = '303'
        />
        <Stats 
        title = 'Likes'
        img = {images.twitter}
        stat = '507'
        arrow = {images.up}
        percent = '553'
        />
        <Stats 
        title = 'Likes'
        img = {images.youtube}
        stat = '107'
        arrow = {images.down}
        percent = '19'
        />
        <Stats 
        title = 'Total Views'
        img = {images.youtube}
        stat = '1407'
        arrow = {images.down}
        percent = '12'
        />
    </section>
  )
}

export default Overview