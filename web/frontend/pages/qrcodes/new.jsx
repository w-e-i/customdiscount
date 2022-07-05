/*
 * @Author: Wilson 1280396971@qq.com
 * @Date: 2022-07-01 15:14:30
 * @LastEditors: Wilson 1280396971@qq.com
 * @LastEditTime: 2022-07-01 15:15:21
 * @FilePath: \test-app-01\web\frontend\pages\qrcodes\new.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Page } from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'
import { QRCodeForm } from '../../components'

export default function ManageCode() {
  const breadcrumbs = [{content: 'QR codes', url: '/' }]

  return (
    <Page>
      <TitleBar
        title="Create new QR code"
        breadcrumbs={breadcrumbs}
        primaryAction={null}
      />
      <QRCodeForm />
    </Page>
  )
}
