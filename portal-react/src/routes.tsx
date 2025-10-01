import Home from "./components/Home"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsOfService from "./components/TermsOfService"
import TestimonialsPage from "./components/TestimonialsPage"
import TestimonialDetails from "./components/TestimonialDetails"

const routes = [
  { id: 1, path: "/home", element: <Home /> },
  { id: 2, path: "/privacy-policy", element: <PrivacyPolicy /> },
  { id: 3, path: "/terms-of-service", element: <TermsOfService /> },
  { id: 4, path: "/references/testimonials", element: <TestimonialsPage /> },
  { id: 5, path: "/testimonial-details/:testimonialId", element: <TestimonialDetails /> },
]

export default routes
