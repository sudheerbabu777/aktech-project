import React, { useState } from 'react';
// import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import './Comments.css';

const Comment = ({ name, role, description }) => (
  <tr key={name}>
    <td className='btn btn-secondary btn-sm rounded-2 border-danger shadow'>{name}</td>
    <td >{role}</td>
    <td className='btn btn-warning btn-sm rounded-2 border-danger shadow'>{role ? `${description} - ${role}` : description}</td>
  </tr>
);

const Comments = () => {
  const jsonData = [
    {
      name: 'Adi',
      role: 'Python  Full Stack Developer & React js Developer ',
      description: 'Director at AK & Technical Expert.',
    },
    {
      name: 'Khalandar',
      role: 'Writer and HR',
      description: 'Director at AK & Writer Expert as a subject',
    },
    {
      name: 'Naveen',
      description: 'Java Developer & Marketing Head',

    },
    {
      name: 'Vindo Kumar K',
      description: 'Operation Head, Technical Subject Matter Expert',
      role:'Technical Subject Matter Expert'
    },
    {
      name: 'Sudheer',
      description: 'Operation Head & Technical Expert',
      role: 'Python Full Stack Developer & Mern Stack Developer',

    },
    {
      name: 'Harika',
      description: '',
      role: 'Front-End Architecture',

    },
    {
      name: 'Mounica',
      description: 'Front-End Architecture',
      role: 'Front-End Architecture',

    },
    {
      name: 'Harish k',
      description: '',
      role: 'UI Developer',

    },
    {
      name: 'Harish B',
      description: '',
      role: 'Front End Developer',

    },
    {
      name: 'Prakash',
      description: '',
      role: 'Software Developer',

    },
    {
      name: 'Priya k',
      description: '',
      role: 'Front End Developer',

    },
    {
      name: 'Sushmita',
      description: 'Content Writer',
      role: 'Content Writer',
    },
  ];

  const [filterName, setFilterName] = useState('');

  const filteredData = jsonData.filter((data) =>
    data.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h3>Developers Role & Support Technology 24/7</h3>
      <div className="mb-3">
        <label htmlFor="nameFilter" className="form-label">Filter by Name:</label>
        <input
          type="text"
          className="form-control"
          id="nameFilter"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>
      <table className="table table-bordered table-hover shadow">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <Comment key={data.name} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
