import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class News extends Component {
    articles = [
        {
            "section": "technology",
            "subsection": "",
            "title": "Two Executives in Sam Bankman-Fried’s Crypto Empire Plead Guilty to Fraud",
            "abstract": "Caroline Ellison, the former chief executive of Alameda Research, and Gary Wang, a founder of FTX, are cooperating in the federal criminal case against Mr. Bankman-Fried.",
            "url": "https://www.nytimes.com/2022/12/21/technology/ftx-fraud-guilty-pleas.html",
            "uri": "nyt://article/05fdb852-c5a9-5c51-b52c-0452c6e70320",
            "byline": "By David Yaffe-Bellany, Matthew Goldstein and Benjamin Weiser",
            "item_type": "Article",
            "updated_date": "2022-12-22T00:29:06-05:00",
            "created_date": "2022-12-21T20:58:42-05:00",
            "published_date": "2022-12-21T20:58:42-05:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
                "Frauds and Swindling",
                "Securities and Commodities Violations",
                "Virtual Currency",
                "Extradition",
                "Computers and the Internet"
            ],
            "org_facet": [
                "HK FTX Trading Ltd (Futures Exchange)",
                "Alameda Research LLC"
            ],
            "per_facet": [
                "Bankman-Fried, Sam",
                "Ellison, Caroline (1994- )",
                "gary wang"
            ],
            "geo_facet": [],
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/multimedia/21ftx-charges-1-d02b/21ftx-charges-1-d02b-superJumbo.jpg",
                    "format": "Super Jumbo",
                    "height": 1365,
                    "width": 2048,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "A plane in the Bahamas was set to take Sam Bankman-Fried to the United States on Wednesday night. He was in F.B.I. custody, a federal official said.",
                    "copyright": "Joe Raedle/Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/multimedia/21ftx-charges-1-d02b/21ftx-charges-1-d02b-threeByTwoSmallAt2X.jpg",
                    "format": "threeByTwoSmallAt2X",
                    "height": 400,
                    "width": 600,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "A plane in the Bahamas was set to take Sam Bankman-Fried to the United States on Wednesday night. He was in F.B.I. custody, a federal official said.",
                    "copyright": "Joe Raedle/Getty Images"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/multimedia/21ftx-charges-1-d02b/21ftx-charges-1-d02b-thumbLarge.jpg",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "A plane in the Bahamas was set to take Sam Bankman-Fried to the United States on Wednesday night. He was in F.B.I. custody, a federal official said.",
                    "copyright": "Joe Raedle/Getty Images"
                }
            ],
            "short_url": "https://nyti.ms/3vcLp9z"
        },
        {
            "section": "technology",
            "subsection": "",
            "title": "A New Chat Bot Is a ‘Code Red’ for Google’s Search Business",
            "abstract": "A new wave of chat bots like ChatGPT use artificial intelligence that could reinvent or even replace the traditional internet search engine.",
            "url": "https://www.nytimes.com/2022/12/21/technology/ai-chatgpt-google-search.html",
            "uri": "nyt://article/f25444bc-9a10-5c0f-8e84-883f9d8488d7",
            "byline": "By Nico Grant and Cade Metz",
            "item_type": "Article",
            "updated_date": "2022-12-21T11:03:58-05:00",
            "created_date": "2022-12-21T05:00:16-05:00",
            "published_date": "2022-12-21T05:00:16-05:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
                "Artificial Intelligence",
                "Search Engines",
                "Science and Technology",
                "Computers and the Internet",
                "internal-sub-only"
            ],
            "org_facet": [
                "Google Inc",
                "Alphabet Inc"
            ],
            "per_facet": [
                "Pichai, Sundar",
                "Ramaswamy, Sridhar",
                "Ghahramani, Zoubin"
            ],
            "geo_facet": [],
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/12/20/business/00google-killer/00google-killer-superJumbo.jpg",
                    "format": "Super Jumbo",
                    "height": 1435,
                    "width": 2048,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "Christian Gralingen"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/20/business/00google-killer/00google-killer-threeByTwoSmallAt2X.jpg",
                    "format": "threeByTwoSmallAt2X",
                    "height": 400,
                    "width": 600,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "Christian Gralingen"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/20/business/00google-killer/00google-killer-thumbLarge.jpg",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "Christian Gralingen"
                }
            ],
            "short_url": "https://nyti.ms/3v5LuMj"
        },
        {
            "section": "technology",
            "subsection": "personaltech",
            "title": "How to Use ChatGPT and Still Be a Good Person",
            "abstract": "It’s a turning point for artificial intelligence, and we need to take advantage of these tools without causing harm to ourselves or others.",
            "url": "https://www.nytimes.com/2022/12/21/technology/personaltech/how-to-use-chatgpt-ethically.html",
            "uri": "nyt://article/84732724-bd77-5f90-a9fc-cdd3b2b76e22",
            "byline": "By Brian X. Chen",
            "item_type": "Article",
            "updated_date": "2022-12-21T05:00:19-05:00",
            "created_date": "2022-12-21T05:00:19-05:00",
            "published_date": "2022-12-21T05:00:19-05:00",
            "material_type_facet": "",
            "kicker": "tech fix",
            "des_facet": [
                "Artificial Intelligence",
                "Computers and the Internet",
                "Content Type: Service",
                "Plagiarism"
            ],
            "org_facet": [
                "OpenAI Labs",
                "Prisma Labs Inc"
            ],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/business/21techfix/21techfix-superJumbo.jpg",
                    "format": "Super Jumbo",
                    "height": 1434,
                    "width": 2048,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "Derek Abella"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/business/21techfix/21techfix-threeByTwoSmallAt2X.jpg",
                    "format": "threeByTwoSmallAt2X",
                    "height": 400,
                    "width": 600,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "Derek Abella"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/business/21techfix/21techfix-thumbLarge.jpg",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "",
                    "copyright": "Derek Abella"
                }
            ],
            "short_url": "https://nyti.ms/3WgOp0y"
        },
        {
            "section": "technology",
            "subsection": "",
            "title": "TikTok Class Is in Session",
            "abstract": "Those who can go viral do. And they may also teach a class or two while they’re at it.",
            "url": "https://www.nytimes.com/2022/12/21/technology/tiktok-influencer-classes.html",
            "uri": "nyt://article/20915b52-3bb5-559a-803d-0e57e254644d",
            "byline": "By Kalley Huang",
            "item_type": "Article",
            "updated_date": "2022-12-21T09:17:17-05:00",
            "created_date": "2022-12-21T05:00:19-05:00",
            "published_date": "2022-12-21T05:00:19-05:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
                "Social Media",
                "Computers and the Internet",
                "Video Recordings, Downloads and Streaming",
                "E-Learning",
                "Adult Education",
                "Advertising and Marketing"
            ],
            "org_facet": [
                "TikTok (ByteDance)",
                "Skillshare Inc",
                "Udemy"
            ],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/12/25/multimedia/00tiktok-classes-loren-1-f5d2/00tiktok-classes-loren-1-f5d2-superJumbo.jpg",
                    "format": "Super Jumbo",
                    "height": 2048,
                    "width": 1366,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Taylor Loren, a social media strategist in Vancouver, British Columbia, teaches a class on using TikTok.",
                    "copyright": "Jennilee Marigomen for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/25/multimedia/00tiktok-classes-loren-1-f5d2/00tiktok-classes-loren-1-f5d2-threeByTwoSmallAt2X.jpg",
                    "format": "threeByTwoSmallAt2X",
                    "height": 400,
                    "width": 600,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Taylor Loren, a social media strategist in Vancouver, British Columbia, teaches a class on using TikTok.",
                    "copyright": "Jennilee Marigomen for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/25/multimedia/00tiktok-classes-loren-1-f5d2/00tiktok-classes-loren-1-f5d2-thumbLarge.jpg",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Taylor Loren, a social media strategist in Vancouver, British Columbia, teaches a class on using TikTok.",
                    "copyright": "Jennilee Marigomen for The New York Times"
                }
            ],
            "short_url": "https://nyti.ms/3hGYvIS"
        },
        {
            "section": "technology",
            "subsection": "",
            "title": "Sam Bankman-Fried Is Set for Extradition to U.S.",
            "abstract": "The FTX founder agreed to be transferred from the Bahamas to face federal charges of fraud.",
            "url": "https://www.nytimes.com/2022/12/21/technology/sbf-ftx-extradition.html",
            "uri": "nyt://article/05dafebf-ed39-5d86-9d7f-ddbedcf44101",
            "byline": "By Royston Jones Jr., David Yaffe-Bellany, Rob Copeland and Matthew Goldstein",
            "item_type": "Article",
            "updated_date": "2022-12-21T17:53:59-05:00",
            "created_date": "2022-12-21T12:07:25-05:00",
            "published_date": "2022-12-21T12:07:25-05:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
                "Extradition",
                "Embezzlement",
                "Virtual Currency"
            ],
            "org_facet": [
                "HK FTX Trading Ltd (Futures Exchange)"
            ],
            "per_facet": [
                "Bankman-Fried, Sam"
            ],
            "geo_facet": [
                "Bahama Islands"
            ],
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/multimedia/21sbf-extradition-1-a3c6/21sbf-extradition-1-a3c6-superJumbo.jpg",
                    "format": "Super Jumbo",
                    "height": 1366,
                    "width": 2048,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Sam Bankman-Fried, the founder of FTX, arriving at the Magistrate Court on Wednesday in Nassau, Bahamas.",
                    "copyright": "Eva Marie Uzcategui for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/multimedia/21sbf-extradition-1-a3c6/21sbf-extradition-1-a3c6-threeByTwoSmallAt2X.jpg",
                    "format": "threeByTwoSmallAt2X",
                    "height": 400,
                    "width": 600,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Sam Bankman-Fried, the founder of FTX, arriving at the Magistrate Court on Wednesday in Nassau, Bahamas.",
                    "copyright": "Eva Marie Uzcategui for The New York Times"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/21/multimedia/21sbf-extradition-1-a3c6/21sbf-extradition-1-a3c6-thumbLarge.jpg",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "Sam Bankman-Fried, the founder of FTX, arriving at the Magistrate Court on Wednesday in Nassau, Bahamas.",
                    "copyright": "Eva Marie Uzcategui for The New York Times"
                }
            ],
            "short_url": ""
        },
        {
            "section": "business",
            "subsection": "",
            "title": "Elon Musk’s Distraction Is Just One of Tesla’s Problems",
            "abstract": "The maker of electric cars faces sharp competition, plummeting shares and production woes while its chief executive is preoccupied with Twitter.",
            "url": "https://www.nytimes.com/2022/12/21/business/tesla-elon-musk.html",
            "uri": "nyt://article/87b8eba2-42e6-53b0-be22-32dbb81bc29f",
            "byline": "By Jack Ewing, Daisuke Wakabayashi and Melissa Eddy",
            "item_type": "Article",
            "updated_date": "2022-12-21T23:44:37-05:00",
            "created_date": "2022-12-21T11:06:43-05:00",
            "published_date": "2022-12-21T11:06:43-05:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
                "Electric and Hybrid Vehicles",
                "Automobiles",
                "Stocks and Bonds",
                "Production",
                "Executives and Management (Theory)"
            ],
            "org_facet": [
                "Tesla Motors Inc",
                "Twitter"
            ],
            "per_facet": [
                "Musk, Elon"
            ],
            "geo_facet": [],
            "multimedia": [
                {
                    "url": "https://static01.nyt.com/images/2022/12/20/multimedia/00tesla-01-1-0395/00tesla-01-1-0395-superJumbo.jpg",
                    "format": "Super Jumbo",
                    "height": 1365,
                    "width": 2048,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The erratic management style of Elon Musk, Tesla’s chief executive, is eroding his reputation as a genius.",
                    "copyright": "Pool photo by Patrick Pleul"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/20/multimedia/00tesla-01-1-0395/00tesla-01-1-0395-threeByTwoSmallAt2X.jpg",
                    "format": "threeByTwoSmallAt2X",
                    "height": 400,
                    "width": 600,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The erratic management style of Elon Musk, Tesla’s chief executive, is eroding his reputation as a genius.",
                    "copyright": "Pool photo by Patrick Pleul"
                },
                {
                    "url": "https://static01.nyt.com/images/2022/12/20/multimedia/00tesla-01-1-0395/00tesla-01-1-0395-thumbLarge.jpg",
                    "format": "Large Thumbnail",
                    "height": 150,
                    "width": 150,
                    "type": "image",
                    "subtype": "photo",
                    "caption": "The erratic management style of Elon Musk, Tesla’s chief executive, is eroding his reputation as a genius.",
                    "copyright": "Pool photo by Patrick Pleul"
                }
            ],
            "short_url": "https://nyti.ms/3VhpYyK"
        }
    ]
    constructor() {
        super()
        this.Setstate = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    
    render() {
        return (
            <>
                <div className="container my-3" style={{ padding: "4rem" }}>
                    <h2>News Wallah - Top Headlines</h2>
                    <div className="row my-3">
                        <div className='col-md-4'>
                                <NewsCard title="title" abstract="abstract" newsUrl="url" imgUrl=""/>
                            </div>
                    </div>
                </div>
            </>
        )
    }
}