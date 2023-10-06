const posts = [
  {
    id: 1,
    title: '',
    href: '#',
    description:
      '中学から大学まで部活動で10年間バスケットボールに励み、その中で培った向上心と思考力、チームワーク力が強み。それらを生かして、社会人１年目として現在は通信業界の課題解決に向けて営業に励む。ITに関する知見を深めるため、技術分野にも挑戦中。',
    date: 'date of date: May 10 ,1999',
    datetime: '2020-03-16',
    category: { title: '男', href: '#' },
    author: {
      name: '光永慎',
      role: 'ドコモcs 東京支店　企画総務部',
      href: '#',
      imageUrl: '/images/IMG_9306.JPG',
    },
  },
];

function AboutMe() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            光永慎
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            経歴：広島県出身、九州大学を卒業後、NTTドコモに入社。
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt="Author Image"
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
