"use client"
import { tagVariants, titleVariants } from '@/utils/animation'
import Badge from './Badge'
import { motion } from 'framer-motion'


const CompanySection = () => {
  return (
    <div className='bg-primary dark:bg-[#292C3D] py-24 sm:py-32'>
        <div className='mx-auto max-2-7xl px-6 lg:px-8'>
            <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>      
                
                {/* Badge 1 */}
                <motion.div 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={titleVariants}
                className='mx-auto flex max-w-xs flex-col gap-y-4'> 
                    <dt className='text-white leading-7 '>
                        Transaction every 24 hours
                    </dt>
                    <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                        <Badge
                        endCountNum={20}
                        endCountText=' Thousand'
                        />
                    </dd>
                </motion.div>

                {/* Badge  2*/}
                <motion.div 
                                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className='mx-auto flex max-w-xs flex-col gap-y-4'> 
                    <dt className='text-white leading-7 '>
                        Assets Under Running
                    </dt>
                    <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                        <Badge
                        endCountNum={90}
                        endCountText=' Thousand'
                        />
                    </dd>
                </motion.div>


                {/* Badge 3 */}
                <motion.div 
                                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className='mx-auto flex max-w-xs flex-col gap-y-4'> 
                    <dt className='text-white leading-7 '>
                        New Works Annually
                    </dt>
                    <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                        <Badge
                        endCountNum={450}
                        endCountText=' +'
                        />
                    </dd>
                </motion.div>
            </dl>
        </div>
    </div>
  )
}

export default CompanySection