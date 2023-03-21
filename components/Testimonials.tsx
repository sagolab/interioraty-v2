import Image from "next/image";

const testimonials = [
  [
    {
      content: "정말 좋아요! 지금 필요한 것 같아요. 출시 축하드려요!",
      link: "https://twitter.com/interioraty",
      author: {
        name: "Eve Porcello",
        role: "Engineer & Author",
        image: "/eve.jpg",
      },
    },

    {
      content:
        "드디어! 집 꾸미기에서 우유부단함을 극복하는 데 도움이 되는 것이 있네요!",
      link: "https://twitter.com/interioraty",
      author: {
        name: "Arthur Dvorkin",
        role: "Engineer",
        image: "/arthur.jpg",
      },
    },
  ],
  [
    {
      content:
        "이것은 놀라운 것입니다. 이제는 인테리어 디자이너가 필요하지 않을 것 같네요.",
      link: "https://twitter.com/interioraty",
      author: {
        name: "Ade Dada",
        role: "Startup Founder",
        image: "/ade.jpeg",
      },
    },
    {
      content:
        "5년 동안 방 레이아웃을 변경하지 않았는데, 이 앱이 그것을 바꿀지도 모르겠네요. 멋진 일을 해내셨습니다.",
      link: "https://twitter.com/interioraty",
      author: {
        name: "Rob Attfield",
        role: "Software Engineer",
        image: "/rob.jpg",
      },
    },
  ],
  [
    {
      content:
        "이것은 환상적입니다. 이미 생성된 이미지에서 새로운 벽 색상을 결정했고, 그것을 다시 칠하는 것이 이제 주말 프로젝트가 되었습니다.",
      link: "https://twitter.com/interioraty",
      author: {
        name: "Music",
        role: "Some dude on the internet",
        image: "/music.jpg",
      },
    },
    {
      content: "🤯",
      link: "https://twitter.com/interioraty",
      author: {
        name: "GitHub",
        role: "The one and only",
        image: "/github.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            전 세계 많은 사람들에게 사랑받고 있습니다.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
            제품에 대해 92,000명 이상의 사용자가 말하는 것을 확인하세요.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out "
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-gray-600 p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-white">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-white">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-gray-400">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
