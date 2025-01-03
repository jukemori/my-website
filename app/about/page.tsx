import Image from 'next/image'

export default function About() {
  return (
    <>
      <h1 className="mb-5 text-3xl font-bold">About Me</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Background</h2>
        <p className="text-muted mb-4">
          I grew up in Tokyo with a deep fascination for American movies and TV
          shows, which inspired a dream to explore the United States. At 15, I
          took a leap and became an international exchange student in Georgia,
          experiencing American culture firsthand.
        </p>
        <p className="text-muted mb-4">
          After graduating high school, my college journey took me across the
          U.S.—from the sunny vibes of Bay Area of California to the plains of
          Wyoming and even the quiet rural areas of upstate New York. While
          playing collegiate football, I explored various career paths but
          struggled to find a clear direction.
        </p>
        <Image
          width={590}
          height={350}
          src="/images/about/about-football.jpg"
          alt="about image"
          className="mx-auto my-12 h-[250px] w-[350px] rounded-lg object-cover shadow-lg md:h-[350px] md:w-[590px]"
        />
        <p className="text-muted mb-4">
          In 2019, I unexpectedly developed a passion for learning Spanish.
          Despite struggling with the language in high school and college, I
          embraced self-study, using tools like Duolingo to improve. Motivated
          by my progress, I began my career in Mexico, working as an Assistant
          Manager at a logistics company for nearly three years.
        </p>
        <p className="text-muted mb-4">
          I later transitioned to a role at Casio as a Sales Planning Executive,
          but it became clear that my interests lay elsewhere. That realization
          led me to pursue a career in tech. I returned to Japan in 2023,
          completed an intensive web development bootcamp at Le Wagon, and began
          my journey as a frontend developer in Tokyo.
        </p>

        <Image
          width={590}
          height={350}
          src="/images/about/about-mexico.jpg"
          alt="about image"
          className="mx-auto my-12 h-[250px] w-[350px] rounded-lg object-cover shadow-lg md:h-[350px] md:w-[590px]"
        />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Path to Programming</h2>
        <p className="text-muted mb-4">
          My transition into programming wasn&apos;t a straight path. Working in
          corporate roles made me reflect on the significance of meaningful
          work. During my time in Mexico City, I encountered digital nomads
          whose lifestyles inspired me to explore coding.
        </p>
        <p className="text-muted mb-4">
          At first, programming felt like learning an entirely new language, but
          I quickly found it thrilling. I immersed myself in learning, attended
          a bootcamp, and connected with tech enthusiasts at meetups, which
          expanded my perspective and reshaped my career path.
        </p>
        <p className="text-muted mb-4">
          My first role as a frontend engineer at a digital consulting firm
          exposed me to a variety of technologies and industries. The fast-paced
          nature of client work honed my adaptability and problem-solving
          skills. Seeking a more focused environment, I transitioned to a
          product-driven company specializing in logistics digital services.
        </p>
        <p className="text-muted mb-4">
          Currently, I work as a frontend engineer, collaborating with
          cross-functional teams to develop scalable systems and improve user
          experiences. My role enables me to apply my technical expertise while
          continuously growing and tackling new challenges in an Agile
          environment.
        </p>
        <Image
          width={590}
          height={350}
          src="/images/about/about-boxing.jpg"
          alt="about image"
          className="mx-auto my-12 h-[250px] w-[350px] rounded-lg object-cover shadow-lg md:h-[350px] md:w-[590px]"
        />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Interests</h2>
        <p className="text-muted mb-4">
          When I&apos;m not coding, I&apos;m on the sports field. Football has
          been a lifelong passion—I played through college and still join
          weekend pick-up games. I&apos;m also a Manchester United fan. During
          my time in Mexico, I discovered boxing, trained for three years, and
          continue to enjoy it today.
        </p>
        <p className="text-muted mb-4">
          In my downtime, I love binge-watching Spanish TV shows and traveling
          to new destinations.
        </p>
      </section>
    </>
  )
}
