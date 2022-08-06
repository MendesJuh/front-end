import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'
import Avatar from '../../assets/avatar.svg'

import { H1 } from '../../components/Title/styles'
import Button from '../../components/Title/containerItens/Button'

import { Container, Image, User } from './styles'
import ContainerItens from '../../components/Title/containerItens'


function Users() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()




  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")
      setUsers(newUsers);
    }
    fetchUsers()


  }, [])


  async function deleteUsers(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate('/')
  }

  return (

    <Container>
      <Image alt="logo-img" src={Avatar} />
      <ContainerItens isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {users.map(user => (

            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age} </p>
              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} alt='lata-de-lixo' /> </button>
            </User>

          ))
          }

        </ul>

        <Button isBack={true} onClick={goBackPage} >
          <img alt='seta' src={Arrow} />Voltar </Button>

      </ContainerItens>

    </Container>

  )
}

export default Users;