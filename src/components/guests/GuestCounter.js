import React, { useContext } from 'react';
import GuestContext from '../../context/guestContext/guestContext';

const GuestCounter = () => {
  const { guests } = useContext(GuestContext);
  const totalInvited = guests.length;
  const attending = guests.filter(guest => guest.isConfirmed);
  const totalAttending = attending.length;
  const invitedByDiet = (type) => guests.filter(guest => guest.dietary === type).length
  const attendingByDiet = (type) => attending.filter(guest => guest.dietary === type).length

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>{invitedByDiet('non-vegan')}</td>
            <td>{invitedByDiet('non-vegan')}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{invitedByDiet('vegan')}</td>
            <td>5</td>
          </tr><tr>
            <th>Pescetarians</th>
  <td>{invitedByDiet('pescatarian')}</td>
  <td>{invitedByDiet('pescatarian')}</td>
          </tr>
          <tr>
            <th>Total</th>
  <td>{totalInvited}</td>
  <td>{totalAttending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GuestCounter
