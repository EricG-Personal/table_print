import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable, { ReactTableDefaults } from 'react-table'
import 'react-table/react-table.css'


class App extends Component 
{
  constructor( props )
  {
    super( props );

    Object.assign( ReactTableDefaults,
      {
        sortable: false
      }
    )

    this._handlePrintEvent = this.handlePrintEvent;
  }


  
  handlePrintEvent( mql )
  {
    if ( mql.matches )
    {
      console.log( "onbeforeprint" );
    }
    else
    {
      console.log( "onafterprint" );      
    }
  }



  componentDidMount()
  {
    console.log( "componentDidMount" );

    var mediaQueryList = window.matchMedia( 'print' );

    mediaQueryList.addListener( this._handlePrintEvent );
  }



  render() 
  {
    const nameList  = [ "Tyler Zheng", "Tangela Arbuckle", "Matt Texada", "Jefferson Rehder", "Bettye Laforest", "Belia Whittenburg", "Vinita Heins", "Columbus Challis", "Lola Guillen", "Elton Toomey", "Rex Munroe", "Hilma Vanduyne", "Jeramy Mcivor", "Kayce Gerber", "Cara Hoard", "Patria Agosta", "Jazmin Demott", "Carlene Davi", "Marquis Haverty", "Federico Troiano", "Margaret Feather", "Adriana Colmenero", "Margrett Mcclay", "Brook Restivo", "Raymon Sircy", "Lissette Holding", "Doria Abernethy", "Tatum Ader", "Edris Braz", "Etha Schlottmann", "Brianne Papas", "Anika Lemonds", "Jamison Tant", "Cherilyn Mcgeorge", "Dorla Koen", "Karl Gunderson", "Lisabeth Brosius", "Tonette Halsell", "Lucienne Rulison", "Theron Topps", "Alesia Clough", "Vanita Mahan", "Sadie Thorn", "Sixta Kenton", "Sterling Nunn", "Adan Fairclough", "Gerald Dimick", "Billi Hollaway", "Carroll Hopkin", "Lanora Burkle" ];
    const jobList   = [ "Accountant", "Actor", "Acupuncturist", "Administrator", "Advertising executive", "Air traffic controller", "Aircraft engineer", "Anaesthetist", "Animal breeder", "Anthropologist", "Antique dealer", "Archaeologist", "Architect", "Archivist", "Aromatherapist", "Art critic", "Art dealer", "Art historian", "Artist", "Assembly line worker", "Astrologer", "Astronomer", "Au pair", "Auctioneer", "Auditor", "Author", "Baggage handler", "Bailiff", "Baker", "Bank clerk", "Bank manager", "Bar staff", "Barber", "Barrister", "Beauty therapist", "Blacksmith", "Boat builder", "Bodyguard", "Book-keeper", "Bookmaker", "Brewer", "Bricklayer", "Broadcaster", "Builder", "Building labourer", "Bus driver", "Business consultant", "Business owner", "Butcher", "Butler", "Cabin crew", "Cabinet maker", "Camera operator", "Car dealer", "Car wash attendant", "Care assistant", "Career criminal", "Careers advisor", "Caretaker", "Carpenter", "Carpet fitter", "Cartoonist", "Cashier", "Casual worker", "Catering staff", "Chauffeur", "Chef", "Chemist", "Childcare worker", "Childminder", "Childrens entertainer", "Chimney sweep", "Chiropodist", "Chiropractor", "Choreographer", "Circus worker", "Civil servant", "Clairvoyant", "Cleaner", "Clergyman", "Cleric", "Clerical assistant", "Clockmaker", "Coastguard", "Comedian", "Community worker", "Company director", "Composer", "Computer analyst", "Computer engineer", "Computer programmer", "Conservationist", "Construction worker", "Cook", "Coroner", "Costume designer", "Counsellor", "Councillor", "Courier", "Craftsperson", "Crane driver", "Crematorium worker", "Croupier", "Crown prosecutor", "Curator", "Customs officer", "Dancer", "Data processor", "Debt collector", "Decorator", "Delivery driver", "Dental hygienist", "Dental nurse", "Dentist", "Designer", "Dietician", "Diplomat", "Director", "Disc jockey", "Diver", "Doctor", "Domestic staff", "Doorman", "Dressmaker", "Driving instructor", "Drug dealer", "Economist", "Editor", "Electrician", "Engineer", "Estate agent", "Events organiser", "Factory worker", "Fairground worker", "Farmer", "Farm worker", "Fashion designer", "Film director", "Financial advisor", "Firefighter", "Fisherman/woman", "Fitness instructor", "Flower arranger", "Flying instructor", "Footballer", "Fork-lift driver", "Foster parent", "Fundraiser", "Funeral director", "Gamekeeper", "Garden designer", "Gardener", "Gas fitter", "Genealogist", "Grave digger", "Groom", "Hairdresser", "Handyman", "Healthcare assistant", "Health visitor", "Heating engineer", "Herbalist", "Historian", "Homeopath", "Homemaker", "Home-worker", "Horticulturalist", "Housekeeper", "Hypnotherapist", "Illustrator", "Immigration officer", "Independent means", "Insurance consultant", "Interior designer", "Interpreter", "Inventor", "IT consultant", "Jewellery maker", "Jockey", "Journalist", "Judge", "Kennel worker", "Laboratory technician", "Labourer", "Landowner", "Landscape gardener", "Lap dancer", "Lawyer", "Leaflet distributor", "Lecturer", "Legal secretary", "Librarian", "Lifeguard", "Lift engineer", "Lighthouse keeper", "Literary agent", "Local govt worker", "Lock keeper", "Locksmith", "Lorry driver", "Machinist", "Magician", "Magistrate", "Make-up artist", "Management consultant", "Managing director", "Manicurist", "Market trader", "Marketing director", "Massage therapist", "Mathematician", "Medical student", "Merchant navy personnel", "Meteorologist", "Meter reader", "Midwife", "Miner", "Minister", "Missionary", "Model", "Moneylender", "Mortician", "Musician", "Nun", "Nurse", "Occupational therapist", "Oil rig crew", "Optician", "Osteopath", "Paramedic", "Park-keeper", "Park ranger", "Party planner", "Pathologist", "Pawnbroker", "Pest controller", "Pharmacist", "Photographer", "Physiotherapist", "Pickpocket", "Picture framer", "Pilot", "Plasterer", "Plumber", "Police officer", "Politician", "Pop star", "Porter", "Postal delivery worker", "Preacher", "Priest", "Printer", "Prison officer", "Private investigator", "Probation officer", "Producer", "Professor", "Property developer", "Prostitute", "Psychiatrist", "Psychologist", "Publican", "Publisher", "Racing driver", "Radio presenter", "Receptionist", "Refuse collector", "Reporter", "Researcher", "Retired", "Road sweeper", "Roofer", "Sailor", "Salesperson", "Scaffolder", "School crossing warden", "School meals supervisor", "Scientist", "Sculptor", "Secretary", "Security guard", "Ship builder", "Singer", "Shoemaker", "Shop assistant", "Social worker", "Software consultant", "Soldier", "Solicitor", "Song writer", "Special constable", "Speech therapist", "Sports coach", "Sportsperson", "Stockbroker", "Street entertainer", "Student", "Surgeon", "Surveyor", "Tailor", "Tarot Reader", "Tattooist", "Tax inspector", "Taxi driver", "Teacher", "Teaching assistant", "Telephonist", "Telesales person", "Television presenter", "Toilet attendant", "Tour guide", "Traffic warden", "Train driver", "Travel agent", "Typist", "Undertaker", "Unemployed", "Veterinary surgeon", "Waiting staff" ];
    const cityNames = [ "Arnnoque", "Millman", "Munher", "Hiurasivik", "Kangersuatliku", "Qaarsaq", "Chepopan", "Almosingo", "Marcate", "Leiry", "Brentpon", "Somerisle", "Churchfield", "Pictona", "Bruderborg", "Kapitu", "Kangaatdal", "Itilsuarsuit", "Marzoc", "Huehuenito", "Obrelajara", "Templemouth", "Enham", "Baxdwell", "Fallodge", "Asman", "Cochmeuse", "Qaarsiaq", "Nanortut", "Kangermanaq", "Cuerpache", "Mangidora", "Tantolapa", "Islingby", "Autumnpool", "Framingborough", "Antiwin", "Thurjour", "Morindeen", "Nanordal", "Ikerarasak", "Qasigiannsiaat", "Tecoloapan", "Manzamas", "Tancoco", "Huntingden", "Kingsden", "Plywell", "Alfait", "Nivermar", "Colnan", "Saarsimiut", "Qassisivik", "Siorapasiaq", "Manzamora", "Atiramar", "Matadoba", "Mayry", "Attlewin" ];

    var data = [];
    var name = nameList[ Math.floor( Math.random() * nameList.length ) ];
    var x    = 0;

    nameList.forEach( function( name )
    {
      x++;

      data.push({
        id: x,
        name: name,
        age: Math.floor( Math.random() * 100 ),
        job: jobList[ Math.floor( Math.random() * jobList.length ) ],
        city: cityNames[ Math.floor( Math.random() * cityNames.length ) ],
        friend: {
          name: nameList[ Math.floor( Math.random() * nameList.length ) ],
          age: Math.floor( Math.random() * 100 ),
          job: jobList[ Math.floor( Math.random() * jobList.length ) ],
          city: cityNames[ Math.floor( Math.random() * cityNames.length ) ],
        }
      })
    });
  
    const columns = [
      {
        Header: "Person",
        columns: [
          {
            Header: 'ID',
            accessor: 'id' 
          },{
            Header: 'Name',
            accessor: 'name' 
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> 
          }, {
            Header: 'Job',
            accessor: 'job',
          }, {
            Header: 'City',
            accessor: 'city',
          }
        ]
      },
      {
        Header: "Friend",
        columns: [
          {
            id: 'friendName', 
            Header: 'Friend Name',
            accessor: d => d.friend.name 
          }, {
            Header: props => <span>Friend Age</span>, 
            accessor: 'friend.age'
          }, {
            id: 'friendJob', 
            Header: 'Friend Job',
            accessor: d => d.friend.job 
          }, {
            id: 'friendCity', 
            Header: 'Friend City',
            accessor: d => d.friend.city 
          }
        ]
      }
    ];
  
   

    return (
      <div className="App">
         <ReactTable
          data={data}
          columns={columns}
        />
      </div>
    );
  }
}

export default App;
