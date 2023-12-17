import Image from "next/image"

export default function Whitepaper() {
    return (
      <div className="bg-white text-gray-900">
          <main>
            <section className="px-20 py-16 bg-[#FFC102] relative w-full">
              <div className="w-[60%] text-left">
                <h1 className="text-5xl font-bold mb-8">White paper</h1>
                <p className="text-lg font-bold mb-20">
                  By establishing a truly decentralized social aggregation platform, we aim to pioneer innovative social
                  models and enhance the social experience in the Web3 digital era!
                </p>
                <p className="text-sm mt-4">A well-known project by KAKAO in the Republic of Korea©</p>
              </div>
              <div className="absolute right-10 bottom-10">
                <Image
                src="/whitepaper.png"
                alt="Whitepaper background"
                width={400}
                height={400}
                />
              </div>
            </section>

            <div className="px-20 py-16">

              <section className=" pb-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">ABOUT KAKAO</h2>
                </div>
                <p className="mb-4">
                  Kakao is a South Korean software development, financial, entertainment media, and game development company
                  formed by the merger of KakaoPay, KakaoBank, KakaoTalk, KakaoGames, Kakao Entertainment, and more. Through
                  the merger, Kakao possesses an unparalleled business portfolio and value chain, spanning over 50
                  subsidiaries and affiliates in verticals including finance, entertainment, gaming, and chat software. As a
                  social application of national importance in South Korea, Kakao holds a position similar to WeChat in
                  China. Its success has attracted investments from organizations such as the SoftBank Vision Fund, Tencent
                  (China&apos;s premier internet insurance company), Tencent Games, China, the Central Bank of Norway, and, in
                  the present stage, the newly established KaKacoin Foundation in the United States. Kakao&apos;s future is
                  brimming with opportunities for development and adjustments, making it a testament to its strength as a
                  renowned company.
                </p>
              </section>
              <section className="py-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">VISION</h2>
                </div>
                <p className="mb-4">
                  KaKacoin aspires to build a decentralized social aggregation platform through a decentralized Web3.0
                  network, incorporating GameFi and SocialFi, and achieving the healthy development and prosperity of the
                  ecosystem through DAO governance. It aims to give back the value it generates to participants according to
                  their community contributions, realizing co-construction, co-sharing, and co-governance.
                </p>
              </section>
              <section className="py-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">KAKACOIN&apos;S SOCIAL SPACE</h2>
                </div>
                <p className="mb-4">
                  KaKacoin is a next-generation social aggregation platform created by merging the popular Web3.0 concepts
                  and decentralized ideologies, built on the foundation of the Republic of Korea&apos;s national social
                  application, Kakao Talk. In its first phase, KaKacoin&apos;s mission is to pioneer the creation of a
                  decentralized social space where gaming communities and groundbreaking social ecosystems intertwine.
                  KaKacoin envisions a virtual human-centric digital social investment, aiming to establish a governance
                  system, intended to innovate the interaction model of individuals in the digital realm by co-participating
                  and equally decentralized social investing. The integration of each individual&apos;s unique social spaces will
                  converge, enabling communication from anywhere and allowing every participating user to create their
                  &quot;social domain&quot;, fostering and enjoying immersive experiences.
                </p>
              </section>
              <section className="py-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">KAKACOIN&apos;S SOCIAL METAVERSE</h2>
                </div>
                <p className="mb-4">
                The Social Metaverse, also known as the Decentralized Social Metaverse, is a framework designed by KaKaocoin 
                with the mission to realize innovative human interactions in the digital space. Participants create user 
                accounts with a unique identity ID generated through mnemonic passphrases and public keys.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-[#fff9e6] rounded-2xl py-4 px-12 flex flex-col items-center">
                    <Image
                      src="/wp1.png"
                      alt="wp1 icon"
                      width={36}
                      height={36}
                    />
                    <h3 className="font-bold my-4">Digital Identity</h3>
                    <p className="text-sm mb-4 text-center">
                      Data such as digital credentials and identity information is recorded on blockchain technology and
                      permanently stored on the blockchain. Users have full ownership of their data.
                    </p>
                  </div>
                  <div className="bg-[#fff9e6] rounded-2xl py-4 px-12 flex flex-col items-center">
                    <Image
                      src="/wp2.png"
                      alt="wp2 icon"
                      width={36}
                      height={36}
                    />
                    <h3 className="font-bold my-4">KaKacoin World</h3>
                    <p className="text-sm mb-4">
                      This will provide users with unique experiences in which users can utilize their own blockchain-based
                      virtual space to build interactions with other existing applications like WeChat, Discord, and users
                      can participate in VR and social activities, add pets, and partake in various role-play activities.
                    </p>
                  </div>
                  <div className="bg-[#fff9e6] rounded-2xl py-4 px-12 flex flex-col items-center">
                    <Image
                      src="/wp3.png"
                      alt="wp3 icon"
                      width={36}
                      height={36}
                    />
                    <h3 className="font-bold my-4">KaKacoin GameFi</h3>
                    <p className="text-sm mb-4">
                      Users participate in Play to Earn within the built-in GameFi ecosystem and earn tokens to access
                      various gaming shopping in the market, or used in additional roles through social interactions.
                    </p>
                  </div>
                </div>
              </section>
              <section className="py-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">KKC SOCIALFI MODEL</h2>
                </div>
                <p className="mb-4">
                  SocialFi refers to SocialFinance. Literally, it can be understood as Social + Finance, and possibly even
                  Social + DeFi (Decentralized Finance), which essentially means the organic integration of social and
                  financial activities on the blockchain. SocialFi is characterized by decentralization, openness, and user
                  control.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-100 p-4 rounded-2xl">
                    <p className="font-semibold my-2 px-4">
                      KaKaocoin&apos;s Integration of Social Interaction, NFT, Games, and Metaverse
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl">
                    <p className="font-semibold my-2 px-4">
                      Integration of Social Interaction and DAO in KaKaocoin
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 my-2 rounded-2xl">
                    <p className="font-semibold mt-2 px-4">
                      KaKaocoin SocialFi Model:
                    </p>
                    <p className="text-sm px-4">
                      ·  Behavior Reward NFT   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ·  Node Rewards - PoS + PoW
                    </p>
                  </div>
                </div>
              </section>
              <section className="py-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">KKC ECONOMIC MODEL</h2>
                </div>
                
                <p className="mb-4">
                  KaKacoin&apos;s platform will introduce a comprehensive and recyclable economic model in the first phase, which
                  will include the introduction of a social token called KaKacoin, abbreviated as &quot;KKC&quot;. KKC is the
                  circulating token for the decentralized social platform in the first phase and is issued as a standard
                  token based on the Ethereum ERC-20 protocol. KKC serves as both an incentive token and a social token
                  within the KaKacoin platform.
                </p>
                <p className="mb-8">
                  KKC can be viewed as a reward provided by KaKacoin for early community users and participants who
                  contribute to the early community user acquisition.
                </p>
                <Image
                  src="/distribution.png"
                  alt="coin distribution"
                  width={800}
                  height={500}
                />
                <p className="text-[#FFC102] text-xl font-semibold mt-8 mb-4">
                KaKaocoin Node Tokens 
                </p>
                <p>
                  Within the KaKaocoin social network, each domain functions as a node, and each node has an exclusive NFT. By 
                  becoming a part of the DAOs community nodes, users will participate in KaKaocoin&apos;s governance and enjoy dividends 
                  and market rewards within the ecosystem.
                </p>
              </section>
              <section className="py-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">KKC DAO GOVERNANCE</h2>
                </div>
                <p className="mb-4">
                KaKaocoin, as a truly decentralized social metaverse of the future, aims to establish a better digital social world. 
                One of the requirements to achieve this goal is to enable practical tools to collect feedback from the community and 
                make decisions most effectively. For this reason, KaKaocoin will grant its community token holders the privilege to 
                govern the KaKaocoin Metaverse through a decentralized organization called KaKaocoin DAO. This will allow them to 
                freely initiate proposals, vote, and express their opinions on the forum.
                </p>
                <p className="text-[#FFC102] font-semibold my-4">
                1.0 Core Members of Phase One
                </p>
                <p className="text-[#FFC102] font-semibold my-4">
                2.0 Diversified Community Autonomy in Phase Two
                </p>
                <p className="text-[#FFC102] font-semibold my-4">
                3.0 KaKaocoin DAO
                </p>
                <p className="text-[#FFC102] font-semibold my-4">
                4.0 Development Stages of KaKaocoin DAO
                </p>
                <p>
                KaKaocoin&apos;s DAO will gradually evolve into a practical and exemplary DAO, including: Primarily focused on social 
                communication with wallet as the supplement, integrating a wallet within social communication and incorporating the 
                community, DAO, and Gamefi
                </p>
              </section>
              <section className="py-8">
                <div className="flex justify-start">
                  <div className="w-2 h-8 bg-[#FFC102] mr-8"></div>
                  <h2 className="text-3xl font-bold mb-4">KKC&apos;S FUTURE PLANS</h2>
                </div>
                <p className="mb-4 font-semibold">
                  In the future, KaKacoin will continue to enhance and add various features to its platform, with a primary
                  focus on social communication and a supplemental role for the wallet. These additions will further
                  integrate the community, DAO, and GameFi.
                </p>
                <p className="mb-2">· Personal asset security, including asset tracking and data analysis tools.</p>
                <p className="mb-2">
                  · Staking pool (community available but not yet integrated into the social platform). Users can choose
                  single asset staking or liquidity mining to earn income.
                </p>
                <p className="mb-2">
                  · Aggregated trading. For example, if you are interested in investment portfolios shared by others, you can trade 
                  with a single click at the best prices. 
                </p>
                <p className="mb-2">
                  · Integration with various Gamefi projects. Directly conduct activities on the platform and share in-game achievements, 
                  such as purchased buildings, products, or profit pictures with a single click. 
                </p>
                <p className="mb-2">
                · Trending topics. You can follow different real-time trends, understand industry dynamics, and create your own topics to 
                become moderators and earn income by managing topic content. 
                </p>
                <p className="mb-2">· Trending cryptocurrencies and newly listed coins. View real-time prices.</p>
                <p className="mb-2">· User tagging, such as &quot;Whale user&quot;, &quot;crypto expert&quot;, &quot;day trader&quot; and more.</p>

                <p className="mt-4 text-sm">More new social features. The KaKaocoin community can vote to introduce additional features. In summary, KaKaocoin&apos;s decentralized social platform is expected to be revolutionary in the future, meeting the current needs of cryptocurrency investors in terms of practicality, entertainment, playability, and financial aspects.</p>
              </section>
            </div>
          </main>
      </div>
    )
  }
  
  