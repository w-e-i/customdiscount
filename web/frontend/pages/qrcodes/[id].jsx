/*
 * @Author: Wilson 1280396971@qq.com
 * @Date: 2022-07-01 15:18:40
 * @LastEditors: Wilson 1280396971@qq.com
 * @LastEditTime: 2022-07-01 15:59:34
 * @FilePath: \test-app-01\web\frontend\pages\qrcodes\[id].jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Card, Page, Layout, SkeletonBodyText } from '@shopify/polaris'
import { Loading, TitleBar } from '@shopify/app-bridge-react'
import { QRCodeForm } from '../../components'
import { useParams } from 'react-router-dom'
import { useAppQuery } from '../../hooks'


export default function QRCodeEdit() {
  const breadcrumbs = [{ content: 'QR codes', url: '/' }]

  const { id } = useParams()

  /*
    Fetch the QR code.
    useAppQuery uses useAuthenticatedQuery from App Bridge to authenticate the request.
    The backend supplements app data with data queried from the Shopify GraphQL Admin API.
  */
  const {
    data: QRCode,
    isLoading,
    isRefetching,
  } = useAppQuery({
    url: `/api/qrcodes/${id}`,
    reactQueryOptions: {
      /* Disable refetching because the QRCodeForm component ignores changes to its props */
      refetchOnReconnect: false,
    },
  })


  /* Loading action and markup that uses App Bridge and Polaris components */
  if (isLoading || isRefetching) {
    return (
      <Page>
        <TitleBar title="Edit QR code" breadcrumbs={breadcrumbs} primaryAction={null} />
        <Loading />
        <Layout>
          <Layout.Section>
            <Card sectioned title="Title">
              <SkeletonBodyText />
            </Card>
            <Card title="Product">
              <Card.Section>
                <SkeletonBodyText lines={1} />
              </Card.Section>
              <Card.Section>
                <SkeletonBodyText lines={3} />
              </Card.Section>
            </Card>
            <Card sectioned title="Discount">
              <SkeletonBodyText lines={2} />
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card sectioned title="QR code" />
          </Layout.Section>
        </Layout>
      </Page>
    )
  }

  return (
    <Page>
      <TitleBar title="Edit QR code" breadcrumbs={breadcrumbs} primaryAction={null} />
      <QRCodeForm QRCode={QRCode} />
    </Page>
  )
}
