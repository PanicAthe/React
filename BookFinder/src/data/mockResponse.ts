import type { BookSearchResponse } from '../types/book'

export const mockBookResponse: BookSearchResponse = {
  documents: [
    {
      authors: ['네빌고다드'],
      contents:
        '내 마음속 반응만이 바뀌었을 뿐인데 정말 외부세상도 그것에 따라 바뀔까? 이 의문에 대한 답을 알기 위해서는 직접 해보는 수밖에 없다. 나를 옭아매는 특정한 상황을 생각해본다. 나의 마음이 일정한 상황에 대해 똑같은 반응을 하고 있다는 것을 알 수 있다. 이제 그 반응을 바꿔본다.',
      datetime: '2020-04-28T00:00:00.000+09:00',
      isbn: '8997228234 9788997228232',
      price: 12500,
      publisher: '서른세개의 계단',
      sale_price: 11250,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5374406%3Ftimestamp%3D20260121140143',
      title: '리액트',
      translators: ['이상민'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=5374406&q=%EB%A6%AC%EC%95%A1%ED%8A%B8',
    },
    {
      authors: ['아담 보두치'],
      contents:
        '리액트는 페이스북이 개발한 웹 개발 라이브러리로, 현재 페이스북이 자사 서비스에 적극적으로 활용할 뿐만 아니라 수많은 개발자들이 웹 및 앱 개발에 사용하고 있는 기술이다. 이 책은 리액트에 대한 전반적인 이해와 구현을 통해 모바일 앱 개발이 가능한 리액트 네이티브를 소개한다.',
      datetime: '2019-07-22T00:00:00.000+09:00',
      isbn: '1161753192 9791161753195',
      price: 35000,
      publisher: '에이콘출판',
      sale_price: 31500,
      status: '정상판매',
      thumbnail:
        'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F4992314%3Ftimestamp%3D20230707141959',
      title: '리액트 & 리액트 네이티브 통합 교과서',
      translators: ['강경일'],
      url: 'https://search.daum.net/search?w=bookpage&bookId=4992314&q=%EB%A6%AC%EC%95%A1%ED%8A%B8+%26+%EB%A6%AC%EC%95%A1%ED%8A%B8+%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C+%ED%86%B5%ED%95%A9+%EA%B5%90%EA%B3%BC%EC%84%9C',
    },
  ],
  meta: {
    is_end: false,
    pageable_count: 120,
    total_count: 120,
  },
}
