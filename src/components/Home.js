import './Home.css';

const Home = (props) => {

  const itemDetails = [
    {
      id: 'a',
      date: 'jul 16',
      location: 'Detroit, Mi',
      venue: 'dte energy music theatre'
    },
    {
      id: 'b',
      date: 'jul 19',
      location: 'Toronto, on',
      venue: 'budweiser stage'
    },
    {
      id: 'c',
      date: 'jul 22',
      location: 'Bristow, va',
      venue: 'jiggy lube live'
    },
    {
      id: 'd',
      date: 'jul 29',
      location: 'phoenix, az',
      venue: 'ak-chin pavilion'
    },
    {
      id: 'e',
      date: 'aug 2',
      location: 'las vegas, nv',
      venue: 't-mobile arena'
    },
    {
      id: 'd',
      date: 'aug 7',
      location: 'concord, ca',
      venue: 'concord pavilion'
    },
  ]

  return (
    <div className="HomeContainer">
      <span style={{fontSize: '30px', fontWeight: 'bold'}}>Home</span>
      <div className='Items'>
        {itemDetails.map((item) => {
          return (
            <div className='List'>
              <span style={{width: '12%'}}>{item.date.toUpperCase()}</span>
              <span style={{width: '25%'}}>{item.location.toUpperCase()}</span>
              <span style={{width: '53%'}}>{item.venue.toUpperCase()}</span>
              <button className='TicketsButton'>BUY TICKETS</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home;