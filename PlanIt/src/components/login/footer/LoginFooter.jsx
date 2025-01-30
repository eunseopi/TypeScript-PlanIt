import styled from '@emotion/styled';

export const LoginMenuBox = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 500px;
    padding: 40px 20px;
    list-style: none;
`;

export const Link = styled.a`
    display: block;
    padding: 8px;
    font-size: 14px;
    text-decoration: none;
    color: #808080;
`;

const LOGIN_MENUS = [
    {name: '계정찾기', page: '/findAccount'},
    {name: '비밀번호 찾기', page: '/findPW'},
    {name: '문의하기', page: '/contact'},
]

const LoginFooter = () => {
    return (
        <LoginMenuBox>
            {LOGIN_MENUS.map((menu) => (
                <li key={menu.name}>
                    <Link href={menu.page} id={menu.name}>{menu.name}</Link>
                </li>
            ))}
        </LoginMenuBox>
    )
}

export default LoginFooter;