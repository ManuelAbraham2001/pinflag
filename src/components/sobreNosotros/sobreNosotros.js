import React from 'react'
import staff1 from '../../ilustraciones/nosotros/staff/staff1.png'
import staff2 from '../../ilustraciones/nosotros/staff/staff2.png'
import staff3 from '../../ilustraciones/nosotros/staff/staff3.png'
import npc from '../../ilustraciones/nosotros/staff/npc.png'
import linkedin from '../../ilustraciones/nosotros/staff/linkedin.png';

const SobreNosotros = () => {

    const staff = [
        {
            profilePicture: staff1,
            nombre: 'Rosmarie Behrens',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'Graphic Designer',
            linkedin: 'www.linkedlin.com'
        },
        {
            profilePicture: staff2,
            nombre: 'Jun Wang',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'Marketing',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: staff3,
            nombre: 'Juan Jose Garcia',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'CEO',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
        {
            profilePicture: npc,
            nombre: 'Pepito Perez',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            cargo: 'UX/UI Designer',
            linkedin: 'www.linkedin.com'
        },
    ]

  return (
    <>
        <div className="moreUs_cards_title">
            <h2 className='text-center'>Sobre <span>Nosotros</span></h2>
        </div>
        <div className="staff_cards_container">
            {staff.map((e) => (
                <div className="tarjeta">
                <img src={e.profilePicture} className="profile-pic"/>
                <a src={e.linkedin} className="linkedin">
                    <img src={linkedin}></img>
                </a>
                <h2>{e.nombre}</h2>
                <p>"{e.info}"</p>
                <div className="button">{e.cargo}</div>
                </div>
            ))}
        </div>
    </>
  )
}

export default SobreNosotros