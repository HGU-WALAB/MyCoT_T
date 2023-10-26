import { _mock } from 'src/_mock';

// TO GET THE USER FROM THE AUTHCONTEXT, YOU CAN USE

// CHANGE:
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// const { user } = useMockedUser();

// TO:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: '김한동',
    email: 'test@handong.ac.kr',
    password: 'test1234',
    photoURL: _mock.image.avatar(24),
    phoneNumber: '+40 777666555',
    country: '대한민국',
    address: '37554 경북 포항시 북구 흥해읍 한동로 558 한동대학교',
    state: '경상북도',
    city: '포항시',
    zipCode: '94116',
    about: '테스트용 유저입니다',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
