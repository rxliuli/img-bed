import * as path from 'path'
import { readdir, writeJSON } from 'fs-extra'
import { AsyncArray } from '@liuli-util/async'
import imageSize from 'image-size'

const suffix = new Set([
  'BMP',
  'CUR',
  'DDS',
  'GIF',
  'ICNS',
  'ICO',
  'JPEG',
  'KTX',
  'PNG',
  'PNM',
  'PAM',
  'PBM',
  'PFM',
  'PGM',
  'PPM',
  'PSD',
  'SVG',
  'TIFF',
  'WebP',
])

/**
 * 生成扫描到的图片元数据
 */
export async function generate() {
  const dir = path.resolve(__dirname, '../../docs')
  const names = await readdir(path.resolve(dir))
  const list = await AsyncArray.map(
    names.filter((name) =>
      suffix.has(path.extname(name).substring(1).toUpperCase()),
    ),
    async (name) => {
      const size = imageSize(path.resolve(dir, name))
      return {
        width: size.width,
        height: size.height,
        src: `https://img.rxliuli.com/${name}`,
        name,
      }
    },
  )
  await writeJSON(path.resolve(__dirname, 'src/photos.json'), list)
}
