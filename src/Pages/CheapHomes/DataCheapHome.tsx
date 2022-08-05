import React, { useState, useEffect } from 'react'
import { RootObject } from '../../Types/Types'
import axios from 'axios'
import * as ReactBootstrap from 'react-bootstrap'
import './CheapHomes.css'


export default function DataCheapHome() {

  const [posts, setPosts] = useState<RootObject[]>([])
  const getPosts = async () => {
    const { data } = await axios.get<RootObject[]>("https://jsonplaceholder.typicode.com/users")
    setPosts(data);
  }
  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <ReactBootstrap.Table style={{ top: "0", left: "0", height: "100%", width: "100%" }} striped bordered hover>

        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADRESS OF THE HOUSE</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>COMPANY</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => {
            return (
              <tr key={item.id} >
                <td> {item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
              </tr>
            );
          })}


        </tbody>

      </ReactBootstrap.Table>


    </div>
  )
}


