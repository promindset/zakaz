import router from './auth/register'
import register from './auth/register'

router.get('/ping', (req, res) => {
  res.send({
    status: 'success',
    msg: 'api v1 is alive!!!'
  })
})

router.use('/register', register)

export default router
