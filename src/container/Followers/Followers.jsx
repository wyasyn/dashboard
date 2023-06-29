import React from 'react'
import { Follower } from "../../components"
import { images } from "../../constants"

const Followers = () => {
  return (
    <section className='followers'>
        <Follower 
        img = {images.facebook}
        name = '@nathanf'
        follow = '1987'
        people = 'FOLLOWERS'
        arrow = {images.up}
        up = '12'
        />
        <Follower 
        img = {images.twitter}
        name = '@nathanf'
        follow = '1044'
        people = 'FOLLOWERS'
        arrow = {images.up}
        up = '99'
        />
        <Follower 
        img = {images.instagram}
        name = '@realnathf'
        follow = '11k'
        people = 'FOLLOWERS'
        arrow = {images.up}
        up = '1099'
        />
        <Follower 
        img = {images.youtube}
        name = '@NathanF.'
        follow = '8239'
        people = 'SUBSCRIBERS'
        arrow = {images.down}
        up = '144'
        />
    </section>
  )
}

export default Followers