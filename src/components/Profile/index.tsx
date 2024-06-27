import { AiFillGithub } from 'react-icons/ai'
import { FaBuilding, FaUserFriends } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import {
  GithubDirect,
  InformationUser,
  ProfileContainer,
  ProfileContent,
} from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface PostInformationUserProps {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [postDataUser, setPostDataUser] = useState<PostInformationUserProps>(
    {} as PostInformationUserProps,
  )

  const getUserData = useCallback(async () => {
    const response = await api.get('/users/guilhermebuenoreis')

    setPostDataUser(response.data)
  }, [])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={postDataUser.avatar_url} alt="" />

        <InformationUser>
          <span>{postDataUser.name}</span>
          <p>{postDataUser.bio}</p>
          <div>
            <div>
              <AiFillGithub size={18} />
              <button>{postDataUser.html_url}</button>
            </div>

            <div>
              <FaBuilding size={18} />
              <button>Rocketseat</button>
            </div>
            <div>
              <FaUserFriends size={18} />
              <button>{postDataUser.followers}</button>
            </div>
          </div>
        </InformationUser>
        <GithubDirect>
          <button>GITHUB</button>
          <FaArrowUpRightFromSquare size={12} />
        </GithubDirect>
      </ProfileContent>
    </ProfileContainer>
  )
}
