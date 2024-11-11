const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(pc.red(`No se pudo leer el directorio ${folder}`))
        process.exit(1)
        // process.exit(0) indica que el proceso se completó exitosamente.
        // process.exit(1) indica que el proceso terminó con un error.
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder,file)
        let stats

        try {
            stats = await fs.stat(filePath) //informacion del archivo
        } catch (error) {
            console.error(`No se pudo leer el archivo ${folder}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const filetype = isDirectory ? 'd' : 'f'
        const filesize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()

        return `${pc.bgBlue(filetype)} ${pc.green(file.padEnd(20))} ${pc.blue(filesize.padStart(10))} ${pc.yellow(fileModified)}`


    })
    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileinfo => console.log(fileinfo))
}

ls(folder)