const {
  ReflectionKind,
} = require('typedoc/dist/lib/models/reflections/abstract')

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
  SYMBOL_CONTAINERS,
  SYMBOL_LINK_KINDS,
}
