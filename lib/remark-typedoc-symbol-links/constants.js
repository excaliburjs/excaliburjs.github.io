const {
  ReflectionKind,
} = require('typedoc/dist/lib/models/reflections/abstract')

const TYPEDOC_SYMBOL_LINK_REGEXP = /\[\[([^\]]+)\]\]/gi

const SYMBOL_CONTAINERS = [
  ReflectionKind.Class,
  ReflectionKind.Interface,
  ReflectionKind.Enum,
  ReflectionKind.Module,
  ReflectionKind.SomeModule,
  ReflectionKind.ExternalModule,
]

const SYMBOL_LINK_KINDS = [
  ReflectionKind.Enum,
  ReflectionKind.EnumMember,
  ReflectionKind.Class,
  ReflectionKind.Interface,
  ReflectionKind.Constructor,
  ReflectionKind.Property,
  ReflectionKind.Method,
  ReflectionKind.Accessor,
  ReflectionKind.Function,
  ReflectionKind.TypeAlias,
  ReflectionKind.ObjectLiteral,
]

module.exports = {
  TYPEDOC_SYMBOL_LINK_REGEXP,
  SYMBOL_CONTAINERS,
  SYMBOL_LINK_KINDS,
}
