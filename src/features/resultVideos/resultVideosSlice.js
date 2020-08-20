import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status: 'idle',
    error: null,
    nextPageToken: null,
    videos: [
        {
          kind: 'youtube#video',
          etag: 'yNYHc3q59BQDXhyYzGCza87-D90',
          id: 'YNyFAro1E5M',
          snippet: {
            publishedAt: '2020-08-13T15:00:11Z',
            channelId: 'UCojuFn_hfMyScH5hSHTBADQ',
            title: 'Polo G - Martin & Gina (Official Video)',
            description: 'Official video for "Martin & Gina" by Polo G. \n\nListen & Download \'THE GOAT\' out now: https://PoloG.lnk.to/GOAT \n\nAmazon - https://PoloG.lnk.to/GOAT/amazonmusic\nApple Music - https://PoloG.lnk.to/GOAT/applemusic\niTunes - https://PoloG.lnk.to/GOAT/itunes\nSpotify - https://PoloG.lnk.to/GOAT/spotify\nYouTube Music - https://PoloG.lnk.to/GOAT/youtubemusic\n\nDirected by Reel Goats\n\nMerch available now! - https://capalotapparel.com/\n\nFollow Polo G\nFacebook - https://www.facebook.com/pologofficial/\nInstagram - https://www.instagram.com/polo.capalot/\nTwitter - https://twitter.com/polo_capalot\n\nhttps://www.polocapalot.com/\n\n#PoloG #THEGOAT #MartinGina',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/YNyFAro1E5M/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/YNyFAro1E5M/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/YNyFAro1E5M/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/YNyFAro1E5M/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/YNyFAro1E5M/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'PoloGVEVO',
            tags: [
              'Polo G martin and gina',
              'Polo G pretty vee',
              'PoloG',
              'GOAT',
              'Michael Jordan',
              'Chicago',
              'Chicago Bulls',
              'Stunna4Vegas',
              'NLE Choppa',
              'Stunna',
              'BJ The Chicago Kid',
              'Juice WRLD',
              'Polo G The GOAT',
              'Go Stupid',
              'DND',
              'Heartless',
              'Flex',
              'Phone On DND',
              'Chicago Rapper',
              'Soundcloud Rapper',
              'Polo G GOAT',
              'GOAT album',
              'Greatest of all time',
              'polo g greatest of all time',
              'martin',
              'gina',
              'martin and gina',
              'martin lawrence',
              'martin tv show',
              'martin tv show remake',
              'martin remake',
              'vee'
            ],
            categoryId: '10',
            liveBroadcastContent: 'none',
            localized: {
              title: 'Polo G - Martin & Gina (Official Video)',
              description: 'Official video for "Martin & Gina" by Polo G. \n\nListen & Download \'THE GOAT\' out now: https://PoloG.lnk.to/GOAT \n\nAmazon - https://PoloG.lnk.to/GOAT/amazonmusic\nApple Music - https://PoloG.lnk.to/GOAT/applemusic\niTunes - https://PoloG.lnk.to/GOAT/itunes\nSpotify - https://PoloG.lnk.to/GOAT/spotify\nYouTube Music - https://PoloG.lnk.to/GOAT/youtubemusic\n\nDirected by Reel Goats\n\nMerch available now! - https://capalotapparel.com/\n\nFollow Polo G\nFacebook - https://www.facebook.com/pologofficial/\nInstagram - https://www.instagram.com/polo.capalot/\nTwitter - https://twitter.com/polo_capalot\n\nhttps://www.polocapalot.com/\n\n#PoloG #THEGOAT #MartinGina'
            }
          },
          contentDetails: {
            duration: 'PT3M18S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            regionRestriction: {
              allowed: [
                'LR',
                'LA',
                'GY',
                'GW',
                'GU',
                'GT',
                'GS',
                'GR',
                'GQ',
                'GP',
                'GN',
                'GM',
                'GL',
                'GI',
                'GH',
                'GG',
                'GF',
                'GE',
                'GD',
                'GB',
                'GA',
                'LU',
                'WF',
                'OM',
                'WS',
                'YE',
                'YT',
                'HR',
                'PK',
                'PH',
                'PN',
                'HT',
                'PL',
                'HU',
                'PA',
                'PF',
                'PG',
                'PE',
                'PY',
                'PR',
                'HK',
                'HN',
                'PW',
                'PT',
                'HM',
                'AX',
                'AZ',
                'RS',
                'AQ',
                'AS',
                'AR',
                'AU',
                'ZA',
                'AW',
                'AI',
                'RE',
                'AM',
                'AL',
                'AO',
                'RO',
                'AE',
                'AD',
                'AG',
                'AF',
                'IQ',
                'IS',
                'IR',
                'IT',
                'QA',
                'IE',
                'ID',
                'SZ',
                'IM',
                'IL',
                'IO',
                'IN',
                'BD',
                'SR',
                'BF',
                'BG',
                'BA',
                'BB',
                'ST',
                'BL',
                'BM',
                'BN',
                'BO',
                'BH',
                'BI',
                'BJ',
                'BT',
                'SB',
                'BV',
                'BW',
                'SG',
                'BQ',
                'BR',
                'BS',
                'SK',
                'SJ',
                'SI',
                'SH',
                'SO',
                'BY',
                'SM',
                'SL',
                'SC',
                'JP',
                'SA',
                'JM',
                'JO',
                'JE',
                'CC',
                'CA',
                'CG',
                'CF',
                'CD',
                'CK',
                'CI',
                'CH',
                'CO',
                'CN',
                'CM',
                'CL',
                'SE',
                'CR',
                'SV',
                'RW',
                'CW',
                'CV',
                'CU',
                'CZ',
                'CY',
                'CX',
                'NR',
                'KZ',
                'KY',
                'MK',
                'KR',
                'KP',
                'KW',
                'SD',
                'NU',
                'KI',
                'KH',
                'BZ',
                'KM',
                'KG',
                'KE',
                'KN',
                'LK',
                'LI',
                'ZM',
                'LB',
                'LC',
                'AT',
                'DE',
                'LY',
                'LV',
                'DO',
                'LT',
                'DM',
                'DJ',
                'LS',
                'TF',
                'TG',
                'TD',
                'TC',
                'TN',
                'TO',
                'BE',
                'TM',
                'TJ',
                'TK',
                'TH',
                'TV',
                'TW',
                'TT',
                'TR',
                'SS',
                'TZ',
                'MM',
                'ET',
                'MO',
                'MN',
                'MH',
                'ES',
                'ER',
                'ME',
                'MD',
                'MG',
                'MF',
                'MA',
                'MC',
                'EE',
                'DZ',
                'EG',
                'MY',
                'MX',
                'EC',
                'MZ',
                'MU',
                'MT',
                'MW',
                'MV',
                'MQ',
                'EH',
                'MS',
                'MR',
                'UG',
                'ZW',
                'UA',
                'PM',
                'SY',
                'MP',
                'US',
                'UY',
                'UZ',
                'NI',
                'FR',
                'NL',
                'SX',
                'NO',
                'RU',
                'NA',
                'NC',
                'NE',
                'NF',
                'NG',
                'NZ',
                'NP',
                'FI',
                'FJ',
                'FK',
                'FM',
                'FO',
                'VA',
                'SN',
                'VC',
                'VE',
                'VG',
                'VI',
                'VN',
                'ML',
                'UM',
                'VU',
                'PS',
                'TL'
              ]
            },
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '542938',
            likeCount: '102471',
            dislikeCount: '394',
            favoriteCount: '0',
            commentCount: '8271'
          }
        },
        {
          kind: 'youtube#video',
          etag: 'i-1RO4cou-qiFuVt9nLU85rrY7g',
          id: 'EIzazUv2gtI',
          snippet: {
            publishedAt: '2020-08-13T13:00:01Z',
            channelId: 'UCWOA1ZGywLbqmigxE4Qlvuw',
            title: 'The Devil All The Time starring Tom Holland & Robert Pattinson | Official Trailer | Netflix',
            description: 'Some people are just born to be buried. \n\nIn Knockemstiff, Ohio and its neighboring backwoods, sinister characters — an unholy preacher (Robert Pattinson), twisted couple (Jason Clarke and Riley Keough), and crooked sheriff (Sebastian Stan) — converge around young Arvin Russell (Tom Holland) as he fights the evil forces that threaten him and his family. Spanning the time between World War II and the Vietnam war, director Antonio Campos’ THE DEVIL ALL THE TIME renders a seductive and horrific landscape that pits the just against the corrupted. Co-starring Bill Skarsgård, Mia Wasikowska, Harry Melling, Haley Bennett, and Pokey LaFarge, this suspenseful, finely-woven tale is adapted from Donald Ray Pollock\'s award-winning novel.\n\nWatch The Devil All The Time at https://netflix.com/thedevilallthetime\n\nSUBSCRIBE: http://bit.ly/29qBUt7\n\nAbout Netflix:\nNetflix is the world\'s leading streaming entertainment service with 193 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.\n\nThe Devil All The Time starring Tom Holland & Robert Pattinson | Official Trailer | Netflix\nhttps://youtube.com/Netflix\n\nSinister characters converge around a young man devoted to protecting those he loves in a postwar backwoods town teeming with corruption and brutality.',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/EIzazUv2gtI/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/EIzazUv2gtI/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/EIzazUv2gtI/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/EIzazUv2gtI/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/EIzazUv2gtI/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'Netflix',
            tags: [
              'Robert Pattinson',
              'Tom Holland',
              'Sebastian Stan',
              'Bill Skarsgard',
              'Eliza Scanlen',
              'Mia Wasikowska',
              'Pokey LaFarge',
              'Riley Keough',
              'Jason Clarke',
              'Jake Gyllenhaal',
              'Antonio Campos',
              'Netflix Film',
              'Netflix original',
              'Trailers',
              'Scary Movies',
              'Thriller Movies',
              'Movie Trailers',
              'Horror Movies',
              'Indie film',
              'Southern Gothic',
              'Donald Ray Pollock',
              'Film adaptation',
              'Film festival'
            ],
            categoryId: '24',
            liveBroadcastContent: 'none',
            localized: {
              title: 'The Devil All The Time starring Tom Holland & Robert Pattinson | Official Trailer | Netflix',
              description: 'Some people are just born to be buried. \n\nIn Knockemstiff, Ohio and its neighboring backwoods, sinister characters — an unholy preacher (Robert Pattinson), twisted couple (Jason Clarke and Riley Keough), and crooked sheriff (Sebastian Stan) — converge around young Arvin Russell (Tom Holland) as he fights the evil forces that threaten him and his family. Spanning the time between World War II and the Vietnam war, director Antonio Campos’ THE DEVIL ALL THE TIME renders a seductive and horrific landscape that pits the just against the corrupted. Co-starring Bill Skarsgård, Mia Wasikowska, Harry Melling, Haley Bennett, and Pokey LaFarge, this suspenseful, finely-woven tale is adapted from Donald Ray Pollock\'s award-winning novel.\n\nWatch The Devil All The Time at https://netflix.com/thedevilallthetime\n\nSUBSCRIBE: http://bit.ly/29qBUt7\n\nAbout Netflix:\nNetflix is the world\'s leading streaming entertainment service with 193 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.\n\nThe Devil All The Time starring Tom Holland & Robert Pattinson | Official Trailer | Netflix\nhttps://youtube.com/Netflix\n\nSinister characters converge around a young man devoted to protecting those he loves in a postwar backwoods town teeming with corruption and brutality.'
            },
            defaultAudioLanguage: 'en-US'
          },
          contentDetails: {
            duration: 'PT2M45S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '2785391',
            likeCount: '155692',
            dislikeCount: '1686',
            favoriteCount: '0',
            commentCount: '11141'
          }
        },
        {
          kind: 'youtube#video',
          etag: 'gDA08B6ZH7i3liCfnTdLaj8d4ws',
          id: 'uf-36RC6JHE',
          snippet: {
            publishedAt: '2020-08-12T15:47:22Z',
            channelId: 'UCtYkcye4qLtsfODz17_PHdg',
            title: 'Lapiz  Conciente - El Descanso Eterno',
            description: 'Producido por: Linkon / Reason \n\nDirigido por: RSK Fama Films \n\n\nCopyright: Lapiz Music Ent.\n\nFollow Lápiz Conciente!\nFacebook: http://www.facebook.com/Lapizconcienteofficial\nTwitter: http://www.twitter.com/lapizconciente\nInstagram: http://www.instagram.com/lapizconciente',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/uf-36RC6JHE/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/uf-36RC6JHE/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/uf-36RC6JHE/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/uf-36RC6JHE/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/uf-36RC6JHE/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'UANLOF MUSIC',
            categoryId: '10',
            liveBroadcastContent: 'none',
            localized: {
              title: 'Lapiz  Conciente - El Descanso Eterno',
              description: 'Producido por: Linkon / Reason \n\nDirigido por: RSK Fama Films \n\n\nCopyright: Lapiz Music Ent.\n\nFollow Lápiz Conciente!\nFacebook: http://www.facebook.com/Lapizconcienteofficial\nTwitter: http://www.twitter.com/lapizconciente\nInstagram: http://www.instagram.com/lapizconciente'
            }
          },
          contentDetails: {
            duration: 'PT4M56S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '3657006',
            likeCount: '311095',
            dislikeCount: '19995',
            favoriteCount: '0',
            commentCount: '67180'
          }
        },
        {
          kind: 'youtube#video',
          etag: 'R7-1ayJtK5TVf1AJ1GptxfuYt_U',
          id: 'A3VYsISvUy4',
          snippet: {
            publishedAt: '2020-08-12T21:12:04Z',
            channelId: 'UCET00YnetHT7tOpu12v8jxg',
            title: 'Atalanta vs. PSG | Champions League Quarterfinal Highlights | UCL on CBS Sports',
            description: 'In a one-off match for a spot in the semifinals, Atalanta and Paris Saint-Germain sought to advance and keep their dreams of European glory alive.\n\nStream every UEFA Champions League match live on CBS All Access:\nhttp://bit.ly/ucloncbssports\n\n#PSG #Neymar #Atalanta #ChampionsLeague #UCL #UEFA #ParisSaintGermain #mbappe',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/A3VYsISvUy4/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/A3VYsISvUy4/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/A3VYsISvUy4/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/A3VYsISvUy4/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/A3VYsISvUy4/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'Champions League on CBS Sports',
            tags: [
              'Paris Saint-Germain',
              'Atalanta',
              'Atalanta vs. Paris Saint-Germain',
              'Neymar',
              'Uefa',
              'mbappe',
              'UCL',
              'Champions'
            ],
            categoryId: '17',
            liveBroadcastContent: 'none',
            localized: {
              title: 'Atalanta vs. PSG | Champions League Quarterfinal Highlights | UCL on CBS Sports',
              description: 'In a one-off match for a spot in the semifinals, Atalanta and Paris Saint-Germain sought to advance and keep their dreams of European glory alive.\n\nStream every UEFA Champions League match live on CBS All Access:\nhttp://bit.ly/ucloncbssports\n\n#PSG #Neymar #Atalanta #ChampionsLeague #UCL #UEFA #ParisSaintGermain #mbappe'
            }
          },
          contentDetails: {
            duration: 'PT12M22S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            regionRestriction: {
              allowed: [
                'US'
              ]
            },
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '846246',
            likeCount: '11237',
            dislikeCount: '523',
            favoriteCount: '0',
            commentCount: '2717'
          }
        },
        {
          kind: 'youtube#video',
          etag: '4uMgnvcvvjQLz1nwqfVMA2b7Vvc',
          id: '3C66w5Z0ixs',
          snippet: {
            publishedAt: '2020-08-11T19:20:14Z',
            channelId: 'UCvtRTOMP2TqYqu51xNrqAzg',
            title: 'I ASKED HER TO BE MY GIRLFRIEND...',
            description: 'SUBSCRIBE to BRAWADIS ▶ http://bit.ly/SubscribeToBrawadis\r\n\r\nFOLLOW ME ON SOCIAL\r\n▶ Twitter: https://twitter.com/Brawadis\r\n▶ Instagram: https://www.instagram.com/brawadis/\r\n▶ Snapchat: brawadis\r\n\r\nHi! I’m Brandon Awadis and I like to make dope vlogs, pranks, reactions, challenges and basketball videos. Don’t forget to subscribe and come be a part of the BrawadSquad!',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/3C66w5Z0ixs/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/3C66w5Z0ixs/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/3C66w5Z0ixs/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/3C66w5Z0ixs/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/3C66w5Z0ixs/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'Brawadis',
            tags: [
              'brawadis',
              'prank',
              'basketball',
              'skits',
              'ghost',
              'funny videos',
              'vlog',
              'vlogging',
              'NBA',
              'browadis',
              'challenges',
              'bmw i8',
              'faze rug',
              'faze rug brother',
              'mama rug and papa rug'
            ],
            categoryId: '22',
            liveBroadcastContent: 'none',
            localized: {
              title: 'I ASKED HER TO BE MY GIRLFRIEND...',
              description: 'SUBSCRIBE to BRAWADIS ▶ http://bit.ly/SubscribeToBrawadis\r\n\r\nFOLLOW ME ON SOCIAL\r\n▶ Twitter: https://twitter.com/Brawadis\r\n▶ Instagram: https://www.instagram.com/brawadis/\r\n▶ Snapchat: brawadis\r\n\r\nHi! I’m Brandon Awadis and I like to make dope vlogs, pranks, reactions, challenges and basketball videos. Don’t forget to subscribe and come be a part of the BrawadSquad!'
            }
          },
          contentDetails: {
            duration: 'PT18M38S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '3242760',
            likeCount: '186397',
            dislikeCount: '9965',
            favoriteCount: '0',
            commentCount: '42451'
          }
        },
        {
          kind: 'youtube#video',
          etag: 'm8UBPVNBsymb4Or4u9kYcPVWN4M',
          id: 'hz9_jkrrptU',
          snippet: {
            publishedAt: '2020-08-13T13:00:00Z',
            channelId: 'UCLkAepWjdylmXSltofFvsYQ',
            title: 'BTS (방탄소년단) \'BREAK THE SILENCE: THE MOVIE\' Official Trailer 1 (30\'\')',
            description: '[브레이크 더 사일런스: 더 무비]\n\n개봉: 2020년 9월 10일(목)\n예매: https://www.breakthesilencethemovie.com/\n\n\n[BREAK THE SILENCE: THE MOVIE]\n\nRelease date: Starting September 10th\nTickets at: https://www.breakthesilencethemovie.com/\n\n\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://channels.vlive.tv/FE619 \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/hz9_jkrrptU/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/hz9_jkrrptU/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/hz9_jkrrptU/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/hz9_jkrrptU/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/hz9_jkrrptU/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'BANGTANTV',
            tags: [
              '방탄소년단',
              'BTS',
              'BANGTAN',
              'HIPHOP',
              '알엠',
              'RM',
              '슈가',
              'SUGA',
              '제이홉',
              'jhope',
              '지민',
              'JIMIN',
              '뷔',
              '정국',
              'JUNGKOOK',
              '진',
              'JIN'
            ],
            categoryId: '10',
            liveBroadcastContent: 'none',
            defaultLanguage: 'ko',
            localized: {
              title: 'BTS (방탄소년단) \'BREAK THE SILENCE: THE MOVIE\' Official Trailer 1 (30\'\')',
              description: '[브레이크 더 사일런스: 더 무비]\n\n개봉: 2020년 9월 10일(목)\n예매: https://www.breakthesilencethemovie.com/\n\n\n[BREAK THE SILENCE: THE MOVIE]\n\nRelease date: Starting September 10th\nTickets at: https://www.breakthesilencethemovie.com/\n\n\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://channels.vlive.tv/FE619 \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://i.youku.com/btsofficial \nhttp://btsblog.ibighit.com'
            },
            defaultAudioLanguage: 'ko'
          },
          contentDetails: {
            duration: 'PT30S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '2356174',
            likeCount: '835426',
            dislikeCount: '1887',
            favoriteCount: '0',
            commentCount: '32527'
          }
        },
        {
          kind: 'youtube#video',
          etag: '_wrqwPpuCuVfu7N_p31jnRwqKRs',
          id: 'JX3OU5weSOQ',
          snippet: {
            publishedAt: '2020-08-13T15:00:10Z',
            channelId: 'UCoyaxd5LQSuP4ChkxK0pnZQ',
            title: 'FIFA 21 | Official Career Mode Trailer',
            description: 'Manage every moment in FIFA 21 Career Mode with new depth in matches, transfers, and training: http://x.ea.com/64225\n\nOn the street and in the stadium, see what\'s new in FIFA 21: http://x.ea.com/64226\n\nFIFA 21 releases October 9, 2020. Pre-order the Ultimate Edition before August 14th for an untradeable Ones to Watch player for your FUT 21 team: http://x.ea.com/64227\n\nEntitle for FIFA 21 on either PlayStation 4 or Xbox One before the release of FIFA 22 and upgrade your game for the equivalent next generation console (Xbox Series X or PlayStation 5) at no additional cost: http://x.ea.com/64228\n\nSubscribe to see more FIFA 21 videos: http://bit.ly/pzw4VD.\n\n#FIFA21 #CareerMode',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/JX3OU5weSOQ/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/JX3OU5weSOQ/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/JX3OU5weSOQ/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/JX3OU5weSOQ/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/JX3OU5weSOQ/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'EA SPORTS FIFA',
            tags: [
              'Fifa',
              'fifa 21',
              'fifa 21 career mode',
              'fifa21 career mode',
              'career mode',
              'fifa21',
              'fifa 21 trailer',
              'fifa 21 news',
              'fifa 21 ps4',
              'fifa 21 ps4 gameplay',
              'fifa 21 xbox one',
              'fifa 21 gameplay',
              'fifa 21 pre-order',
              'win as one',
              'fifa 21 reveal trailer',
              'fifa 21 release date',
              'fifa 21 cover',
              'fifa 21 career mode trailer',
              'career fifa 21',
              'fifa 21 career mode news'
            ],
            categoryId: '20',
            liveBroadcastContent: 'none',
            defaultLanguage: 'en',
            localized: {
              title: 'FIFA 21 | Official Career Mode Trailer',
              description: 'Manage every moment in FIFA 21 Career Mode with new depth in matches, transfers, and training: http://x.ea.com/64225\n\nOn the street and in the stadium, see what\'s new in FIFA 21: http://x.ea.com/64226\n\nFIFA 21 releases October 9, 2020. Pre-order the Ultimate Edition before August 14th for an untradeable Ones to Watch player for your FUT 21 team: http://x.ea.com/64227\n\nEntitle for FIFA 21 on either PlayStation 4 or Xbox One before the release of FIFA 22 and upgrade your game for the equivalent next generation console (Xbox Series X or PlayStation 5) at no additional cost: http://x.ea.com/64228\n\nSubscribe to see more FIFA 21 videos: http://bit.ly/pzw4VD.\n\n#FIFA21 #CareerMode'
            },
            defaultAudioLanguage: 'en'
          },
          contentDetails: {
            duration: 'PT2M34S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '714994',
            likeCount: '61961',
            dislikeCount: '7114',
            favoriteCount: '0',
            commentCount: '5949'
          }
        },
        {
          kind: 'youtube#video',
          etag: '2RQE9NTqn7zGL3-i0fN_mjaayIA',
          id: 'x2JkhZd_Kxc',
          snippet: {
            publishedAt: '2020-08-13T15:00:29Z',
            channelId: 'UCPD_bxCRGpmmeQcbe2kpPaA',
            title: 'Action Bronson Shakes It Out While Eating Spicy Wings | Hot Ones',
            description: 'Action Bronson—the  rapper, TV host, chef and New York Times Best Selling author—is back in the hot seat for round two of Hot Ones. You know him from his show ‘F*ck That’s Delicious,’ and his new album ‘Only For Dolphins’ is on the way with the single “Latin Grammys” out now. How will Bam Bam fare against the Season 12 hot sauce lineup? Find out how Mr. Wonderful does against the heat while talking about his quarantine workouts, Star Wars vs. Indiana Jones, abstract art, acting roles and being directed by Judd Apatow (‘The King of Staten Island’) and Martin Scorsese (‘The Irishman’), and why Billy Joel is the best lyricist ever. It’s the return of Action Bronson, a Hot Ones legend and Hot Ones family for life! Bonus: Action shares his recipe for the perfect quarantine sandwich!\n\nSubscribe to First We Feast on YouTube: http://goo.gl/UxFzhK\r\nCheck out more of First We Feast here:\r\nhttp://firstwefeast.com/\r\nhttps://twitter.com/firstwefeast\r\nhttps://www.facebook.com/FirstWeFeast\r\nhttp://instagram.com/firstwefeast\r\n\r\n\r\nFirst We Feast videos offer an iconoclastic view into the culinary world, taking you behind-the-scenes with some of the country\'s best chefs and finding the unexpected places where food and pop culture intersect.',
            thumbnails: {
              'default': {
                url: 'https://i.ytimg.com/vi/x2JkhZd_Kxc/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/x2JkhZd_Kxc/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/x2JkhZd_Kxc/hqdefault.jpg',
                width: 480,
                height: 360
              },
              standard: {
                url: 'https://i.ytimg.com/vi/x2JkhZd_Kxc/sddefault.jpg',
                width: 640,
                height: 480
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/x2JkhZd_Kxc/maxresdefault.jpg',
                width: 1280,
                height: 720
              }
            },
            channelTitle: 'First We Feast',
            tags: [
              'First we feast',
              'fwf',
              'firstwefeast',
              'food',
              'food porn',
              'cook',
              'cooking',
              'chef',
              'kitchen',
              'recipe',
              'bartender',
              'craft beer',
              'complex',
              'complex media',
              'sean evans',
              'sean evans interview',
              'hot ones',
              'hot ones season 12',
              'action bronson',
              'action bronson chicken wings',
              'action bronson hot ones',
              'action bronson spicy',
              'hot ones interview',
              'action bronson interview',
              'chicken wings',
              'spicy wings',
              'hot sauce',
              'the last dab',
              'sean evans action bronson',
              'sean evans questions',
              'first we feast',
              'action bronson eating',
              'mukbang'
            ],
            categoryId: '24',
            liveBroadcastContent: 'none',
            localized: {
              title: 'Action Bronson Shakes It Out While Eating Spicy Wings | Hot Ones',
              description: 'Action Bronson—the  rapper, TV host, chef and New York Times Best Selling author—is back in the hot seat for round two of Hot Ones. You know him from his show ‘F*ck That’s Delicious,’ and his new album ‘Only For Dolphins’ is on the way with the single “Latin Grammys” out now. How will Bam Bam fare against the Season 12 hot sauce lineup? Find out how Mr. Wonderful does against the heat while talking about his quarantine workouts, Star Wars vs. Indiana Jones, abstract art, acting roles and being directed by Judd Apatow (‘The King of Staten Island’) and Martin Scorsese (‘The Irishman’), and why Billy Joel is the best lyricist ever. It’s the return of Action Bronson, a Hot Ones legend and Hot Ones family for life! Bonus: Action shares his recipe for the perfect quarantine sandwich!\n\nSubscribe to First We Feast on YouTube: http://goo.gl/UxFzhK\r\nCheck out more of First We Feast here:\r\nhttp://firstwefeast.com/\r\nhttps://twitter.com/firstwefeast\r\nhttps://www.facebook.com/FirstWeFeast\r\nhttp://instagram.com/firstwefeast\r\n\r\n\r\nFirst We Feast videos offer an iconoclastic view into the culinary world, taking you behind-the-scenes with some of the country\'s best chefs and finding the unexpected places where food and pop culture intersect.'
            },
            defaultAudioLanguage: 'en'
          },
          contentDetails: {
            duration: 'PT24M48S',
            dimension: '2d',
            definition: 'hd',
            caption: 'false',
            licensedContent: true,
            contentRating: {},
            projection: 'rectangular'
          },
          statistics: {
            viewCount: '273206',
            likeCount: '14093',
            dislikeCount: '299',
            favoriteCount: '0',
            commentCount: '1924'
          }
        }
    ]
}

export const resultVideosSlice = createSlice({
    name:"resultVideos",
    initialState: initialState
})

export default resultVideosSlice.reducer 

export  const getResultVideosSelector = state => state.resultVideos.videos