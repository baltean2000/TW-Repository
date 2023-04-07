import React from 'react';
import DetailedPerson from './DetailedPerson';

const personsData: DetailedPerson[] = [
  {
    nume: 'Baltean Sergiu',
    varsta: 22,
    email: 'sergiu.baltean@iis.utm.md',
    telefon: '060094389',
    oras: 'Chisinau',
    adresa: 'Bd.Moscovei 3/1',
    tara: 'Moldova',
  },
  {
    nume: 'Popescu Maria',
    varsta: 25,
    email: 'popescu.maria@gmail.com',
    telefon: '0722123456',
    oras: 'Bucuresti',
    adresa: 'Str. Victoriei 10',
    tara: 'Romania',
  },
  {
    nume: 'Ivanov Ivan',
    varsta: 30,
    email: 'ivanov.ivan@mail.ru',
    telefon: '89001234567',
    oras: 'Moscow',
    adresa: 'Leninsky Prospekt 1',
    tara: 'Russia',
  },
];

function App() {
  return (
    <div>
      <h1>Datele personale:</h1>
      {personsData.map((person, index) => (
        <div key={index}>
          <p>Numele: {person.nume}</p>
          <p>Varsta: {person.varsta}</p>
          <p>Adresa Email: {person.email}</p>
          <p>Număr de Telefon: {person.telefon}</p>
          <p>Oras: {person.oras}</p>
          <p>Adresa: {person.adresa}</p>
          <p>Tara: {person.tara}</p>
          {index < personsData.length - 1 && <hr />} {/* adaugăm o linie orizontală între carduri */}
        </div>
      ))}
    </div>
  );
}

export default App;
