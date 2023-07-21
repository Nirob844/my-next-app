import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();
    setTimeout(() => {
        router.push('/');
    },2000)
    return (
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Wc-pDXUXO2V-KQh_5sQ9g5MGrAmvo3pTLA&usqp=CAU' alt=''
            width="100%"/>
        </div>
    );
};

export default ErrorPage;