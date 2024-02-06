import aboutImage from "../assets/images/noodle.jpeg";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h1 className="text-2xl font-medium">About Us</h1>
                    <p className="text-lg py-5">
                    
Welcome to FOODUP! – Your Culinary Companion!

At FOODUP, we're not just a food marketing app; we are the architects of delightful dining experiences. We understand that your love for food extends beyond the mere act of eating. It's about exploration, anticipation, and the joy that comes with discovering new flavors.</p>

<h2 className="text-2xl font-medium">Our Story</h2>
<p className="text-lg py-5">Born out of a passion for connecting people with the food they love, FOODUP is on a mission to revolutionize the way you experience dining. Our journey began with a simple idea – to bring the diverse world of cuisines right to your doorstep. We believe that great meals have the power to bring people together and create lasting memories.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[500px] h-[500px] object-cover" />
                </div>
            </div>
        </div>
    )
}