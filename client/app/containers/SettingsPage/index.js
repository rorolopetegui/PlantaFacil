/*
 * SettingsPage
 *
 * This is the config page, at the '/settings' route
 *
 */

import React from 'react'
import Typography from '@material-ui/core/Typography'
import { InteractiveList, Sensor } from '../../components'
import { PAGE_TITLE, LIST_SENSOR_TITLE } from './constants'

const sensores = [
  {
    name: 'Relay 1',
    desc: 'Luces led zona 1',
    gpio: 21,
  },
  {
    name: 'Relay 2',
    desc: 'Luces led zona 2',
    gpio: 20,
  },
  {
    name: 'Relay 3',
    desc: 'Luces led zona 3',
    gpio: 26,
  },
  {
    name: 'Relay 4',
    desc: 'Luces led zona 4',
    gpio: 19,
  },
  {
    name: 'Relay 5',
    desc: 'Luces led zona 5',
    gpio: 16,
  },
  {
    name: 'Relay 6',
    desc: 'Luces led zona 6',
    gpio: 13,
  },
  {
    name: 'Relay 7',
    desc: 'Luces led zona 7',
    gpio: 12,
  },
  {
    name: 'Relay 8',
    desc: 'Luces led zona 8',
    gpio: 6,
  },
]

export default function SettingsPage() {
  return (
    <div style={{ contentAlign: 'center' }}>
      <Typography align="center" color="textPrimary" variant="display2">
        {PAGE_TITLE}
      </Typography>
      <InteractiveList title={LIST_SENSOR_TITLE}>
        {sensores.map(item => (
          <Sensor key={item.gpio} item={item} />
        ))}
      </InteractiveList>
    </div>
  )
}
