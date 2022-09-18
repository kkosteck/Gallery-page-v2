import mimetypes

def get_file_type(filename):
    mimetypes.init()
    mimestart = mimetypes.guess_type(filename)[0]

    if mimestart is not None:
        return mimestart.split('/')[0]

    return None
