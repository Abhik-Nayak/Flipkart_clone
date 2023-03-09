import { TempleBuddhist } from '@mui/icons-material';
import { Typography, Box, Card,styled } from '@mui/material';
import { navData } from '../../constant/data';

const NarBar = () => {
    const Component = styled(Card)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px 0px 1px 00px !important',
        width: '100%',
        boxShadow: "0 1px 1px 0 rgb(0 0 0 / 16%)",
        overflow: 'overlay',
        [theme.breakpoints.down('lg')]: {
            margin: '0px !important'
        }
    }))

    const Container = styled(Box)`
        padding: 12px 8px;
        text-align: center
    `;

    const Text = styled(Typography)`
        font-size: 14px;
        font-weight: 500;
        font-family: Arial,sans-serif;
        &:hover,
        &:focus {
          color: #2874f0;
        }
        &:active {
          color: #2874f0;
        }
    `;


    return (
        <Component>
            {
                navData.map(item => (
                    <Container>
                        <img src={item.url} style={{ width: 64 }} />
                        <Text>{item.text}</Text>
                    </Container>
                ))
            }
        </Component>
    )
}

export default NarBar






// const Component = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '55px 130px 0 130px !important',
//     overflowX: 'overlay',
//     [theme.breakpoints.down('lg')]: {
//         margin: '0px !important'
//     }
// }))

// const Container = styled(Box)`
//     padding: 12px 8px;
//     text-align: center
// `

// const Text = styled(Typography)`
//     font-size: 14px;
//     font-weight: 600;
//     font-family: inherit;
// `;

// const NavBar = () => {
//     return (
//         <Component>
//             {
//                 navData.map(temp => (
//                     <Container>
//                         <img src={temp.url} style={{  width: 64 }} />
//                         <Text>{temp.text}</Text>
//                     </Container>
//                 ))
//             }
//         </Component>
//     )
// }

// export default NavBar;