import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import AppMenuItem from './AppMenuItem'

const DASHBOARD = '/panel-de-usuario'

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/panel-de-usuario',
  },
  {
    name: 'Actividades',
    items: [
      {
        name: 'Aportaciones',
        link: `${DASHBOARD}/aportaciones`,
      },
      {
        name: 'Guardades',
        link: `${DASHBOARD}/guardados`,
      },
      {
          name: 'Siguiendo',
          link: `${DASHBOARD}/siguiendo`,
      },
      {
          name: 'Comentarios',
          link: `${DASHBOARD}/comentarios`,
      },
    ],
  },
  {
    name: 'Proyectos',
    items: [
      {
        name: 'Creados',
        link: `${DASHBOARD}/creados`, 
      },
      {
        name: 'En revision',
        link: `${DASHBOARD}/en-revision`,
      },
      {
          name: 'Aprobados',
          link: `${DASHBOARD}/aprovados`,
      },
    ],
  },
  {
    name: 'Notificaciones',
    items: [
      {
        name: 'Mensajes',
        link: `${DASHBOARD}/mensajes`,
      },
      {
        name: 'NewsLetters',
        link: `${DASHBOARD}/newsletters`,
      },
    ],
  },
  {
    name: 'Configuraciones',
    items: [
      {
        name: 'Datos de Registro',
        link: `${DASHBOARD}/datos-de-registro`,
      },
      {
        name: 'Perfil de Usuario',
        link: `${DASHBOARD}/perfiles-de-usuario`,
      },
      {
          name: 'Perfil de Empresas',
          link: `${DASHBOARD}/perfil-de-empresas`,
      },
    ],
  },
]

const SideBarMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {},
  }),
)

export default SideBarMenu

