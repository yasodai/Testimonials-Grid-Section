import React, { cloneElement, isValidElement, ReactNode, useEffect, useState } from "react";
import clsx from 'clsx'

type CardProps = {
  children: ReactNode;
};
function Card({ children }: CardProps) {
  if (!isValidElement(children)) return <></>;

  return cloneElement(children, {
    style: {
      backgroundColor: 'var(--background-color)'
    },
    className: clsx(
      'h-full  p-8 rounded-lg ',
      children.props.className
    ),
  })
}

interface User {
  name: string,
  avatar: string
}
type AvatarProps = User
function Avatar({ name, avatar }: AvatarProps) {
  return (
    <div className="mb-8 flex items-center ">
      {/* image */}
      <div className="w-11 rounded-full overflow-hidden border-2 border-opacity-50 mr-5" style={{ borderColor: 'var(--border-color)' }}>
        <img src={avatar} alt={`${name}'s avatar'`} />
      </div>
      <div className="flex flex-col">
        {/* name */}
        <span className="">{name}</span>

        {/* verified */}
        <span className="text-xs opacity-50" >Verified Graduate</span>
      </div>
    </div>
  );
}

interface Review {
  user: {
    name: string,
    avatar: string
  },
  title: string,
  content: string
}

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json() as Promise<Review[]>)
      .then(setReviews)
  }, [setReviews])
  return (
    <main className="min-h-screen  mx-6 mt-[71px] text-white grid place-content-center">

      <ul
        className="card-group md:grid flex flex-col gap-6 max-w-screen-xl mx-auto"
        style={{
          gridTemplateAreas: `
          'A A B E'
          'C D D E'
          `
        }}>

        {reviews.map((review, index) => (
          <li key={review.title} style={{ gridArea: String.fromCodePoint(65 + index) }}>
            <Card>
              <article>
                <header className="mb-10">
                  {/* avatar */}
                  <Avatar {...review.user} />
                  <h2 className="text-2xl ">{review.title}</h2>
                </header>
                <p className="opacity-70" style={{ color: 'var(--text-color)' }}>{review.content}</p>
              </article>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
