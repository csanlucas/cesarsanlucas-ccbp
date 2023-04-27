export const NAME_ATTR_MAX_LENGTH = 50;

export enum REPO_STATE_TYPE {
    ENABLE = 'E',
    DISABLE = 'D',
    ARCHIVED = 'A'
}

export enum REPO_STATUS_TYPE {
    ACTIVE = 'A',
    INACTIVE = 'I'
}

export const STATE_API_LABEL = {
    [REPO_STATE_TYPE.ARCHIVED]: 'Archivado',
    [REPO_STATE_TYPE.DISABLE]: 'Deshabilitado',
    [REPO_STATE_TYPE.ENABLE]: 'Habilitado'
}

export const STATUS_API_LABEL = {
    '604': 'Verificado',
    '605': 'En espera',
    '606': 'Aprobado'
}
