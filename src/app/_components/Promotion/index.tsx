'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

// chatGPT prompt
// write a useEffect hook that updates a timer every second until a specific target date (current + 7 days)

// modify it so it doesn’t return the value, rather it sets setTime({days, hours, minutes, seconds}) to the modified time

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const now = new Date()
  //     const timeDifference = Number(targetDate) - Number(now)
  //     // If the target date is reached, clear the interval
  //     if (timeDifference <= 0) {
  //       clearInterval(intervalId)
  //       setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  //     } else {
  //       const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  //       const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //       const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  //       const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
  //       setTime({ days, hours, minutes, seconds })
  //     }
  //   }, 1000)
  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(intervalId)
  // }, [])
  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>
        <ul className={classes.stats}>
          <StatBox label="Days" value={time.days} />
          <StatBox label="Hours" value={time.hours} />
          <StatBox label="Minutes" value={time.minutes} />
          <StatBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
