import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Ilkin', lastName: "Haciyev", email: "ilkinhaciyev955@gmail.com" };

  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Guest"}
                    subtext="Access and manage your account and transactions effeciently."
                />
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>
            TRANSACTIONS
        </div>
        <RightSidebar 
            user={loggedIn} 
            transactions={[]}
            banks={[{ currentBalance: 125 }, { currentBalance: 550 }]}
        />
    </section>
  )
}

export default Home