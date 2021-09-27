import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";

export interface CallItem {
  "callId": string | number,
  "firstName": string;
  "lastName": string;
  "profileImage"?: string;
  "callDuration": string;
  "isIncomming": boolean;
  "callDate": string;
  "isGrouped": boolean;
  "hasVideoCall": boolean;
  "peoplesAvailableOnCall": number;
  "peoples"?: Array<any>;
}
const calls: CallItem[] = [
  {
    "callId": 0,
    "firstName": "Burgess",
    "lastName": "Burt",
    "profileImage": avatar1,
    "callDuration": "5:37",
    "isIncomming": true,
    "callDate": "2016-05-05T06:21:22",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 1,
    "firstName": "Bryant",
    "lastName": "Shaffer",
    "profileImage": avatar2,
    "callDuration": "5:24",
    "isIncomming": true,
    "callDate": "2014-05-17T10:22:03",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 2,
    "firstName": "Curtis",
    "lastName": "Spears",
    "profileImage": avatar3,
    "callDuration": "2:43",
    "isIncomming": false,
    "callDate": "2020-11-27T04:11:34",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 3,
    "firstName": "Mara",
    "lastName": "Gilliam",
    "callDuration": "2:41",
    "isIncomming": false,
    "callDate": "2019-08-29T09:52:06",
    "isGrouped": true,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar2,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 4,
    "firstName": "Duncan",
    "lastName": "Snyder",
    "callDuration": "1:57",
    "isIncomming": false,
    "callDate": "2018-12-23T06:05:34",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 5,
    "firstName": "Eunice",
    "lastName": "Atkinson",
    "callDuration": "1:24",
    "isIncomming": true,
    "callDate": "2019-10-28T09:42:19",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 6,
    "firstName": "Meyer",
    "lastName": "Walton",
    "profileImage": avatar4,
    "callDuration": "1:22",
    "isIncomming": true,
    "callDate": "2019-09-19T07:33:53",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 7,
    "firstName": "Debra",
    "lastName": "Davis",
    "callDuration": "4:52",
    "isIncomming": true,
    "callDate": "2019-10-07T02:04:57",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 8,
    "firstName": "Hansen",
    "lastName": "Haynes",
    "profileImage": avatar5,
    "callDuration": "4:24",
    "isIncomming": false,
    "callDate": "2014-01-16T01:31:46",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 9,
    "firstName": "Freida",
    "lastName": "Waters",
    "profileImage": avatar6,
    "callDuration": "4:13",
    "isIncomming": false,
    "callDate": "2014-03-12T06:47:49",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 10,
    "firstName": "Rosie",
    "lastName": "Russo",
    "callDuration": "2:12",
    "isIncomming": true,
    "callDate": "2021-09-11T09:09:00",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 11,
    "firstName": "Day",
    "lastName": "Lawrence",
    "callDuration": "5:33",
    "isIncomming": true,
    "callDate": "2016-12-13T10:53:36",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 12,
    "firstName": "Tamra",
    "lastName": "Dudley",
    "profileImage": avatar7,
    "callDuration": "2:55",
    "isIncomming": true,
    "callDate": "2015-04-22T07:35:32",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 13,
    "firstName": "Marissa",
    "lastName": "Weiss",
    "callDuration": "2:52",
    "isIncomming": false,
    "callDate": "2015-07-22T11:03:38",
    "isGrouped": true,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 14,
    "firstName": "Herrera",
    "lastName": "Randall",
    "callDuration": "3:13",
    "isIncomming": false,
    "callDate": "2015-02-14T10:54:34",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 15,
    "firstName": "Mindy",
    "lastName": "Salas",
    "profileImage": avatar8,
    "callDuration": "3:44",
    "isIncomming": true,
    "callDate": "2015-11-18T12:29:36",
    "isGrouped": true,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 16,
    "firstName": "Jacquelyn",
    "lastName": "Norton",
    "callDuration": "3:2",
    "isIncomming": true,
    "callDate": "2018-07-02T09:37:16",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 17,
    "firstName": "Beulah",
    "lastName": "Mcleod",
    "profileImage": avatar9,
    "callDuration": "3:18",
    "isIncomming": true,
    "callDate": "2020-09-01T07:55:38",
    "isGrouped": true,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 18,
    "firstName": "Diane",
    "lastName": "Morrow",
    "profileImage": avatar10,
    "callDuration": "2:20",
    "isIncomming": false,
    "callDate": "2015-04-06T05:00:05",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 19,
    "firstName": "Terry",
    "lastName": "Rich",
    "callDuration": "1:3",
    "isIncomming": true,
    "callDate": "2020-08-14T09:30:17",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 20,
    "firstName": "Mai",
    "lastName": "Burch",
    "callDuration": "1:25",
    "isIncomming": true,
    "callDate": "2016-04-04T11:35:00",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 21,
    "firstName": "Elaine",
    "lastName": "Sparks",
    "callDuration": "4:32",
    "isIncomming": false,
    "callDate": "2015-01-25T02:54:51",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 22,
    "firstName": "Nunez",
    "lastName": "Dejesus",
    "profileImage": avatar2,
    "callDuration": "1:7",
    "isIncomming": true,
    "callDate": "2014-12-07T07:31:15",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 23,
    "firstName": "Carroll",
    "lastName": "Myers",
    "callDuration": "1:58",
    "isIncomming": true,
    "callDate": "2019-04-25T06:48:20",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 24,
    "firstName": "Harrison",
    "lastName": "Mercer",
    "callDuration": "1:12",
    "isIncomming": false,
    "callDate": "2020-05-17T08:30:41",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 25,
    "firstName": "Elsa",
    "lastName": "Dodson",
    "profileImage": avatar10,
    "callDuration": "4:8",
    "isIncomming": false,
    "callDate": "2017-02-03T02:29:44",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 26,
    "firstName": "Buckner",
    "lastName": "Hyde",
    "callDuration": "4:2",
    "isIncomming": true,
    "callDate": "2016-12-14T10:08:37",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 27,
    "firstName": "Rivera",
    "lastName": "Holmes",
    "callDuration": "3:20",
    "isIncomming": true,
    "callDate": "2021-03-14T06:44:41",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 28,
    "firstName": "Bonnie",
    "lastName": "Mccullough",
    "callDuration": "3:2",
    "isIncomming": false,
    "callDate": "2019-06-30T07:48:48",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 29,
    "firstName": "Chase",
    "lastName": "Slater",
    "callDuration": "1:47",
    "isIncomming": true,
    "callDate": "2020-05-30T08:28:38",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 30,
    "firstName": "Vaughn",
    "lastName": "Tyson",
    "callDuration": "5:37",
    "isIncomming": false,
    "callDate": "2018-06-21T07:24:29",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 31,
    "firstName": "Morin",
    "lastName": "Kinney",
    "callDuration": "3:51",
    "isIncomming": true,
    "callDate": "2014-08-01T03:11:08",
    "isGrouped": true,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 32,
    "firstName": "Robertson",
    "lastName": "Mullins",
    "callDuration": "0:3",
    "isIncomming": false,
    "callDate": "2021-02-07T10:02:29",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 33,
    "firstName": "Elsie",
    "lastName": "Berg",
    "callDuration": "5:21",
    "isIncomming": true,
    "callDate": "2017-01-28T12:15:42",
    "isGrouped": true,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 34,
    "firstName": "Christa",
    "lastName": "Miles",
    "callDuration": "2:21",
    "isIncomming": true,
    "callDate": "2019-08-10T09:37:49",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 35,
    "firstName": "Nanette",
    "lastName": "Edwards",
    "callDuration": "2:43",
    "isIncomming": false,
    "callDate": "2015-03-22T12:52:34",
    "isGrouped": true,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 36,
    "firstName": "Murray",
    "lastName": "Buck",
    "callDuration": "5:40",
    "isIncomming": false,
    "callDate": "2019-11-30T09:45:18",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 37,
    "firstName": "Shaffer",
    "lastName": "Ballard",
    "profileImage": avatar5,
    "callDuration": "5:49",
    "isIncomming": true,
    "callDate": "2019-12-26T12:16:06",
    "isGrouped": false,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 5,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 38,
    "firstName": "Rowena",
    "lastName": "Ray",
    "callDuration": "1:31",
    "isIncomming": false,
    "callDate": "2020-02-25T08:00:54",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 6,
    "peoples": [
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      },
      {
        "id": 1,
        "firstName": "Shaffer",
        "lastName": "Ballard",
        "profileImage": avatar5,
      }
    ]
  },
  {
    "callId": 39,
    "firstName": "Mallory",
    "lastName": "Riddle",
    "profileImage": avatar5,
    "callDuration": "2:41",
    "isIncomming": false,
    "callDate": "2016-02-16T03:26:28",
    "isGrouped": true,
    "hasVideoCall": false,
    "peoplesAvailableOnCall": 2
  },
  {
    "callId": 40,
    "firstName": "Latasha",
    "lastName": "Gardner",
    "profileImage": avatar6,
    "callDuration": "4:37",
    "isIncomming": false,
    "callDate": "2014-09-15T09:25:59",
    "isGrouped": false,
    "hasVideoCall": true,
    "peoplesAvailableOnCall": 2
  },
];

export { calls };
