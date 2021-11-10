import { useRouter } from 'next/router';
const TestimonialPage = () => {
    const router = useRouter();
    return (
        <h1 className="text-center text-2xl">
            Nema toga, ća je {router.query.testimonialId}?
        </h1>
    );
};
export default TestimonialPage;
