
import React from 'react';
import { Card, Typography } from 'antd';

import { ICONS } from '../assets/images';
function ECB() {
    return (
        <>
        xcscd
            <Typography.Title level={2} style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}>
                The ECB Advantage
            </Typography.Title>
            <div className='ecbcust' style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Card style={{ width: 400 }}>
                    <div className='imagecust' style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src={ICONS.financial} alt="Financial Inclusion" style={{ maxWidth: '100px' }} />
                        <Typography.Title level={4}>Financial Inclusion</Typography.Title>
                    </div>
                    <Card.Meta
                        description={
                            <Typography>
                                <p>
                                    ECB believes that everyone should have equal access to financial opportunities. We enable borrowers from all walks of life to realize their dreams and investors to fund promising ventures.
                                </p>
                            </Typography>
                        }
                    />
                </Card>
                <Card style={{ width: 400 }}>
                    <div className='imagecust' style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src={ICONS.securetransaction} alt="Secure and transparent transactions" style={{ maxWidth: '100px' }} />
                        <Typography.Title level={4}>Secure and transparent transactions</Typography.Title>
                    </div>
                    <Card.Meta
                        description={
                            <Typography>
                                <p>
                                    Your financial security is our top priority ECB employs advanced encryption and verification protocols to safeguard your data and transactions.
                                </p>
                            </Typography>
                        }
                    />
                </Card>

                <Card style={{ width: 400 }}>
                    <div className='imagecust' style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src={ICONS.quickaccess} alt="Quick access to funds" style={{ maxWidth: '100px' }} />
                        <Typography.Title level={4}>Quick access to funds</Typography.Title>
                    </div>
                    <Card.Meta
                        description={
                            <Typography>
                                <p>
                                    Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.
                                </p>
                            </Typography>
                        }
                    />
                </Card>

                <Card style={{ width: 400 }}>
                    <div  className='imagecust' style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src={ICONS.communitycentric} alt="Community-Centric Approach" style={{ maxWidth: '100px' }} />
                        <Typography.Title level={4}>Community-Centric Approach</Typography.Title>
                    </div>
                    <Card.Meta
                        description={
                            <Typography>
                                <p>
                                    ECB's Community-Centric Approach empowers local communities, fostering financial inclusion and sustainable development.
                                </p>
                            </Typography>
                        }
                    />
                </Card>
            </div>
            
        </>
    );
}

export default ECB;