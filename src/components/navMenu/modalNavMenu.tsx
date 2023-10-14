import linhaModal from '../../assets/icons/linhaModal.png'

import SairModal from '../../assets/icons/SairModal.png'
import modalUser from '../../assets/icons/modalUser.png'
import { Link } from 'react-router-dom'
import modalProfile from '../../assets/icons/modalProfile.png'

import { ImgProfile, ImgUser, Imglinha, ImgLogout } from './styledNavMenu'

export const ModalNavMenu: React.FC = () => {
  return (
    <>
      <div>
        <ImgProfile src={modalProfile} />
        <Link to="#">
          <ImgUser src={modalUser} />
        </Link>
        <Imglinha src={linhaModal} />
        <Link to="">
          <ImgLogout src={SairModal} />
        </Link>
      </div>
    </>
  )
}
